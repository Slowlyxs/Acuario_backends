// src/cliente/cliente.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOneBy({ id });
  }

  create(cliente: Partial<Cliente>) {
    const nuevoCliente = this.clienteRepository.create(cliente);
    return this.clienteRepository.save(nuevoCliente);
  }

  update(id: number, datos: Partial<Cliente>) {
    return this.clienteRepository.update(id, datos);
  }

  delete(id: number) {
    return this.clienteRepository.delete(id);
  }
}
