import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from './lib/env';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ArcjetModule.forRoot({
      isGlobal: true,
      key: process.env.ARCJET_KEY!,
      rules: [
        // Shield protects your app from common attacks e.g. SQL injection
        shield({ mode: "LIVE" }),
        // Create a bot detection rule
        // detectBot({
        //   mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
        //   // Block all bots except the following
        //   allow: [
        //     "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        //     // Uncomment to allow these other common bot categories
        //     // See the full list at https://arcjet.com/bot-list
        //     //"CATEGORY:MONITOR", // Uptime monitoring services
        //     //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
        //   ],
        // }),
        // Create a fixed window rate limit. Other algorithms are supported.
        fixedWindow({
          mode: "LIVE",
          window: "60s", // * second fixed window
          max: 10, // Allow a maximum of * requests
        }),
      ],
    }),

    MongooseModule.forRoot(ENV.MONGO_URL as string),
    DatabaseModule,
    AuthModule,
    FormModule,
    MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ArcjetGuard
    }
  ],
})
export class AppModule {}
