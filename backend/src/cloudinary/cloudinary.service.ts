import { BadRequestException, Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadApiResponse } from 'cloudinary';
import cloudinary from 'src/config/cloudinary';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import {v4 as uuidv4 } from 'uuid'


@Injectable()
export class CloudinaryService {
      constructor(@InjectRepository(User) private readonly userRepository: Repository<User> ) {}

    async uploadFile(file: Express.Multer.File, userId: number) {
        
      try {
        if (!file) {
          throw new BadRequestException('File is not uploaded')
        }

        const publicId = `ProfileImage-${uuidv4()}`

        const result = await new Promise<UploadApiResponse>((resolve,reject) => {
            const uploadImage = cloudinary.uploader.upload_stream({
                resource_type: "auto", 
                public_id: publicId,
                overwrite: true, 
            },
            
            (error, result) => {
              if (error) return reject(error)
              if (!result) return reject(new Error('Upload success but no result returned'))
              
              resolve(result)
              })

          uploadImage.end(file.buffer)
        })        

        const user = await this.userRepository.findOneBy({id: userId})
        if (!user) {
          await cloudinary.uploader.destroy(publicId);
          throw new NotFoundException('User not found');
        }

        if (user.profileUrl) {
      const oldPublicId = user.profileUrl.split('/').pop()?.split('.')[0];
          if (oldPublicId) {
            await cloudinary.uploader.destroy(oldPublicId).catch(() => {});
          }
        }

        user.profileUrl = result.secure_url;
        await this.userRepository.save(user);

        return result.secure_url;

      } catch(error) {
        throw new BadRequestException('Error uploading image in server')
      }
    }
  
  }
