import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from 'src/entities/form.entity';
import { Repository } from 'typeorm';
import { FormDto } from './dto/form.dto';

@Injectable()
export class FormService {

    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>
    ) {}

    async processForm(body: FormDto) {
        const createTrialSession = this.formRepository.create({
            firstName: body.firstName,
            secondName: body.secondName,
            email: body.email
        })
        
        const savedTrialSession = await this.formRepository.save(createTrialSession)
        return savedTrialSession
    }

    async getAllSession() {
       return this.formRepository.find()
    }

}
