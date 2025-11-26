import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'user',
      password: '1111',
      database: 'user_db',
      // entities: [User, Role, Form],
      synchronize: false, // Enable for development - will auto-create table
      migrationsRun: false, // Don't auto-run migrations on startup
      logging: true,
      autoLoadEntities: true // helps create connection between entities
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
