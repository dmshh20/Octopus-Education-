import { Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';


@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @GetUser() user: GetUserDecoratorDto) {
      const newUrl = await this.cloudinaryService.uploadFile(file, user.id);
      return { secure_url: newUrl };
    }


}
