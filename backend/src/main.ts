import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ENV } from './lib/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  })
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // if the user put extra fields in body that does not exist in dto they wont be pass to the server
    forbidNonWhitelisted: true, // If the user send these extra data - the error will be thrown
    transform: true // instead of parsePipe
  }))
  await app.listen(ENV.PORT ?? 3000);
}
bootstrap();
