import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + "/entity/*.ts"],
      migrations: [],
      synchronize: true, // Enable for development - will auto-create table
      migrationsRun: false,
      logging: true,
      autoLoadEntities: true // helps create connection between entities
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
