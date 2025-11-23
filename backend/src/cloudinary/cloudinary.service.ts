import { BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { getUserData } from 'src/auth/dto/getUserData.dto';
import cloudinary from 'src/config/cloudinary';

  @Injectable()
  export class CloudinaryService {
      

    async uploadFile(file: Express.Multer.File, userId: getUserData) {
      try {
        if (!file) {
          throw new BadRequestException('File is not uploaded')
        }

        return new Promise((resolve,reject) => {
            const uploadImage = cloudinary.uploader.upload_stream({
                resource_type: "auto", 
                public_id: `Octopus_Profile_photo-${userId}`,
                overwrite: true, 
            },
            
            (error, result) => {
              if (error) {
               return reject(error)
              }

              if (!result) {
                return reject(new Error('Upload success but no result returned'))
              }
              
              resolve(result)
            })
           
          uploadImage.end(file.buffer)
        })        


      } catch(error) {
        throw new BadRequestException('Error uploading image in server')
      }
    }
  
  }
