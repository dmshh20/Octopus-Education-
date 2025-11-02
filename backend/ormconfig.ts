import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Role } from './src/entities/role.entity';
import { Form } from './src/entities/form.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'user',
  password: '1111',
  database: 'user_db',
  entities: [User, Role, Form],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
});

