import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';
import { CreateEquipoDto } from './dto/create-equipo.dto';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  findAll(): Promise<Equipo[]> {
    return this.equipoRepository.find();
  }

  async findOne(id: number): Promise<Equipo> {
    const miembro = await this.equipoRepository.findOneBy({ id });
    if (!miembro) {
      throw new NotFoundException(`Miembro con id ${id} no encontrado.`);
    }
    return miembro;
  }

  create(data: CreateEquipoDto): Promise<Equipo> {
    const miembro = this.equipoRepository.create(data);
    return this.equipoRepository.save(miembro);
  }

  async update(id: number, data: Partial<Equipo>): Promise<Equipo> {
    const miembro = await this.findOne(id);
    Object.assign(miembro, data);
    return this.equipoRepository.save(miembro);
  }

  async uploadPhoto(id: number, filename: string): Promise<Equipo> {
    const miembro = await this.findOne(id);
    miembro.foto = filename;
    return this.equipoRepository.save(miembro);
  }
}
