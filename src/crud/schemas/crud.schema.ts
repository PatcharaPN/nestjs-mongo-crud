import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrudDocument = HydratedDocument<Crud>;

@Schema()
export class Crud {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  position: string;
}
export const CrudSchema = SchemaFactory.createForClass(Crud);
