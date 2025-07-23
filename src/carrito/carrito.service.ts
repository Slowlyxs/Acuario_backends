import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { CreateCarritoDto } from './dto/create-carrito.dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  create(createCarritoDto: CreateCarritoDto): Promise<Carrito> {
    const carrito = this.carritoRepository.create(createCarritoDto);
    return this.carritoRepository.save(carrito);
  }

  findAll(): Promise<Carrito[]> {
    return this.carritoRepository.find();
  }

  findOne(id: string): Promise<Carrito | null> {
    return this.carritoRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.carritoRepository.delete(id);
  }
}
