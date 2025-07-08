import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlimentosAguaDulce } from './entities/alimentos_agua_dulce.entity';

@Injectable()
export class AlimentosAguaDulceService {
  constructor(
    @InjectRepository(AlimentosAguaDulce)
    private readonly alimentosRepo: Repository<AlimentosAguaDulce>,
  ) {}

  findAll() {
    return this.alimentosRepo.find();
  }

  findOne(id: number) {
    return this.alimentosRepo.findOneBy({ id });
  }

  create(data: Partial<AlimentosAguaDulce>) {
    return this.alimentosRepo.save(data);
  }

  async update(id: number, data: Partial<AlimentosAguaDulce>) {
    await this.alimentosRepo.update(id, data);
    return this.alimentosRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.alimentosRepo.delete(id);
  }
}