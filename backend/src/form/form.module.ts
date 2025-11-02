import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from 'src/entities/form.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Form])
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
