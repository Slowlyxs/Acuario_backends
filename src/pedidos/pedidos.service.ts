import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido, PedidoDocument } from './schemas/pedido.schema';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(@InjectModel(Pedido.name) private pedidoModel: Model<PedidoDocument>) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const pedido = new this.pedidoModel(createPedidoDto);
    return pedido.save();
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoModel.find().exec();
  }

  async findOne(id: string): Promise<Pedido> {
    const pedido = await this.pedidoModel.findById(id).exec();
    if (!pedido) throw new NotFoundException(`Pedido ${id} no encontrado`);
    return pedido;
  }

  async remove(id: string): Promise<void> {
    await this.pedidoModel.findByIdAndDelete(id).exec();
  }
}
