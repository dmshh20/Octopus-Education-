import { BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import cloudinary from 'src/config/cloudinary';

  @Injectable()
  export class CloudinaryService {
      

    async uploadFile(file: Express.Multer.File) {
      try {
        if (!file) {
          throw UploadedFile('File is not uploaded')
        }

        return new Promise((resolve,reject) => {
            const uploadImage = cloudinary.uploader.upload_stream({
                resource_type: "auto", 
                public_id: "Octopus_Profile_photo",
                overwrite: true, 
            },
            
            (error, result) => {
              if (error) {
                reject(error)
              }

              if (!result) {
                reject(new Error('Upload success but no result returned'))
              }
              
              resolve(result)
            })
           
          uploadImage.end(file.buffer)
        })        


      } catch(error) {
        console.log('back error', error);
        
      }
    }
  
  }
