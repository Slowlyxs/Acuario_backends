// src/venta/venta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sucursal } from './entities/sucursal.entity';

@Injectable()
export class SucursalService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly ventaRepository: Repository<Sucursal>,
  ) {}

  findAll() {
    return this.ventaRepository.find();
  }

  findOne(id: number) {
    return this.ventaRepository.findOne({
      where: { id },
    });
  }

  create(data: Partial<Sucursal>) {
    const venta = this.ventaRepository.create(data);
    return this.ventaRepository.save(venta);
  }

  update(id: number, data: Partial<Sucursal>) {
    return this.ventaRepository.update(id, data);
  }

  delete(id: number) {
    return this.ventaRepository.delete(id);
  }
}
