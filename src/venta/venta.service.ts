// src/venta/venta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  findAll() {
    return this.ventaRepository.find();
  }

  findOne(id: number) {
    return this.ventaRepository.findOne({
      where: { id },
    });
  }

  create(data: Partial<Venta>) {
    const venta = this.ventaRepository.create(data);
    return this.ventaRepository.save(venta);
  }

  update(id: number, data: Partial<Venta>) {
    return this.ventaRepository.update(id, data);
  }

  delete(id: number) {
    return this.ventaRepository.delete(id);
  }
}
