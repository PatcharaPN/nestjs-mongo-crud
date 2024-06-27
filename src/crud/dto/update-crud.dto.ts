import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud.dto';

export class UpdateCrudDto extends PartialType(CreateCrudDto) {
  readonly name?: string;
  readonly age?: number;
  readonly position?: string;
}
