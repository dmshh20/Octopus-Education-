import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'user',
      password: '1111',
      database: 'user_db',
      entities: [User],
      migrations: [],
      synchronize: true, // Enable for development - will auto-create tables
      migrationsRun: false,
      logging: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
