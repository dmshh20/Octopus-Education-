import { DataSource } from 'typeorm';
import 'dotenv/config';
import { ENV } from '../../src/lib/env';
import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { Form } from 'src/entities/form.entity';
import { CompletedSets } from 'src/entities/completedSet.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV.TYPEORM_HOST,
  port: Number(ENV.TYPEORM_PORT),
  username: ENV.TYPEORM_USERNAME,
  password: ENV.TYPEORM_PASSWORD,
  database: ENV.TYPEORM_DATABASE,
  entities: [__dirname + '/../entities/*.ts'],
  // entities: [User, Role, Form, CompletedSets],
  migrations: [__dirname + '/../migrations/*.ts'],
  synchronize: false, 
  logging: true,
});
