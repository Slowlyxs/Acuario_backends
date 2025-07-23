import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TestimonioDocument = Testimonio & Document;

@Schema({ timestamps: true })
export class Testimonio {
  @Prop({ required: true })
  nombreCliente: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop()
  comentario: string;
}

export const TestimonioSchema = SchemaFactory.createForClass(Testimonio);
