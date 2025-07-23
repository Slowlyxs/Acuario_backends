import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PedidoDocument = Pedido & Document;

@Schema({ timestamps: true })
export class Pedido {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  usuarioId: Types.ObjectId;

  @Prop([
    {
      productoId: { type: Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true, min: 1 },
      precioUnitario: { type: Number, required: true },
    },
  ])
  productos: {
    productoId: Types.ObjectId;
    cantidad: number;
    precioUnitario: number;
  }[];

  @Prop({ required: true })
  total: number;

  @Prop({
    enum: ['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'],
    default: 'pendiente',
  })
  estado: string;

  @Prop({
    type: {
      calle: { type: String, required: true },
      ciudad: { type: String, required: true },
      estado: { type: String, required: true },
      codigoPostal: { type: String, required: true },
      pais: { type: String, required: true },
    },
    required: true,
  })
  direccionEnvio: {
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    pais: string;
  };

  @Prop()
  metodoPago: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);
