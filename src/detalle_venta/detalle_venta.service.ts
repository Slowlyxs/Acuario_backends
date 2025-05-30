// src/detalle_venta/detalle_venta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleVenta } from './entities/detalle_venta.entity';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private readonly detalleRepository: Repository<DetalleVenta>,
  ) {}

  findAll() {
    return this.detalleRepository.find();
  }

  findOne(id: number) {
    return this.detalleRepository.findOne({ where: { id } });
  }

  create(data: Partial<DetalleVenta>) {
    const detalle = this.detalleRepository.create(data);
    return this.detalleRepository.save(detalle);
  }

  update(id: number, data: Partial<DetalleVenta>) {
    return this.detalleRepository.update(id, data);
  }

  delete(id: number) {
    return this.detalleRepository.delete(id);
  }
}
