import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from './lib/env';
import { MessagesModule } from './messages/messages.module';
import { ArcjetGuard, ArcjetModule, fixedWindow, shield } from '@arcjet/nest';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CompletedSetsModule } from './completed-sets/completed-sets.module';
import { LockedSetModule } from './locked-set/locked-set.module';
import { LoggingInterceptor } from './interceptor/transform.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ArcjetModule.forRoot({
      isGlobal: true,
      key: process.env.ARCJET_KEY!,
      rules: [
        shield({ mode: "LIVE" }),
        fixedWindow({
          mode: "LIVE",
          window: "60s", // * second fixed window
          max: 10, // Allow a maximum of * requests
        }),
      ],
    }),
    
    // MongooseModule.forRoot(ENV.MONGO_URL as string),
    DatabaseModule,
    AuthModule,
    FormModule,
    // MessagesModule,
    CloudinaryModule,
    CompletedSetsModule,
    LockedSetModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ArcjetGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule {}
