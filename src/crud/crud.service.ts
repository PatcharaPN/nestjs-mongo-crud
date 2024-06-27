import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud } from './schemas/crud.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CrudService {
  constructor(@InjectModel(Crud.name) private crudModel: Model<Crud>) {}

  async create(createCrudDto: CreateCrudDto): Promise<Crud> {
    const createCrud = new this.crudModel(createCrudDto);
    return createCrud.save();
  }

  async findAll(): Promise<Crud[]> {
    return this.crudModel.find().exec();
  }

  findOne(id: string): Promise<Crud> {
    return this.crudModel.findById(id).exec();
  }

  async update(id: string, updateCrudDto: UpdateCrudDto): Promise<Crud> {
    return this.crudModel
      .findByIdAndUpdate(id, updateCrudDto, { new: true })
      .exec();
  }

  remove(id: string) {
    try {
      const result = this.crudModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('Id not found');
      }
      return { message: 'Delete Sucessful' };
    } catch (err) {
      throw new InternalServerErrorException(
        'An error occurred during deletion',
      );
    }
  }
}
