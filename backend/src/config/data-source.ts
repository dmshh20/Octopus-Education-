import { DataSource } from 'typeorm';
import 'dotenv/config';
import { ENV } from 'src/lib/env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV.TYPEORM_HOST,
  port: Number(ENV.TYPEORM_PORT),
  username: ENV.TYPEORM_USERNAME,
  password: ENV.TYPEORM_PASSWORD,
  database: ENV.TYPEORM_DATABASE,
  entities: [__dirname + '/../entities/*.ts'],
  migrations: [__dirname + '/../migrations/*.ts'],
  synchronize: false, 
  logging: true,
});
