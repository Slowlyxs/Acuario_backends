// src/producto/producto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOneBy({ id });
  }

  create(data: Partial<Producto>) {
    const producto = this.productoRepository.create(data);
    return this.productoRepository.save(producto);
  }

  update(id: number, data: Partial<Producto>) {
    return this.productoRepository.update(id, data);
  }

  delete(id: number) {
    return this.productoRepository.delete(id);
  }
}
