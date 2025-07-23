import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProximoProducto } from './schema/proximo_producto.schema';
import { CreateProximoProductoDto } from './dto/proximo_producto.dto';

@Injectable()
export class ProximoProductoService {
  constructor(
    @InjectModel(ProximoProducto.name)
    private readonly model: Model<ProximoProducto>,
  ) {}

  create(dto: CreateProximoProductoDto) {
    const nuevoProducto = new this.model(dto);
    return nuevoProducto.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
