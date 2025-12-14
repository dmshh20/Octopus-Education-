import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { Form } from 'src/entities/form.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { ENV } from 'src/lib/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: ENV.TYPEORM_HOST,
      port: Number(ENV.TYPEORM_PORT),
      username: ENV.TYPEORM_USERNAME,
      password: ENV.TYPEORM_PASSWORD,
      database: ENV.TYPEORM_DATABASE,
      entities: [User, Role, Form, CompletedSets],
      synchronize: false, // Enable for development - will auto-create table
      migrationsRun: false, // Don't auto-run migrations on startup
      logging: true,
      autoLoadEntities: true // helps create connection between entities
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
