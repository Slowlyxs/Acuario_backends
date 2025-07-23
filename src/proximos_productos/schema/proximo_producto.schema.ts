import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProximoProducto extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  fechaLlegada: Date;

  @Prop()
  imagen: string;

  @Prop()
  categoria: string;
}

export const ProximoProductoSchema = SchemaFactory.createForClass(ProximoProducto);
