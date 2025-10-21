import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'user',
  password: '1111',
  database: 'user_db',
  entities: [User],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
});

