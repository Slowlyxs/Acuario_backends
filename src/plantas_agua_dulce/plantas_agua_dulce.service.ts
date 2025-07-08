import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plantas_agua_dulce } from './entities/plantas_agua_dulce.entity';

@Injectable()
export class PlantasAguaDulceService {
  constructor(
    @InjectRepository(plantas_agua_dulce)
    private readonly plantasRepo: Repository<plantas_agua_dulce>,
  ) {}

  findAll() {
    return this.plantasRepo.find();
  }

  findOne(id: number) {
    return this.plantasRepo.findOneBy({ id });
  }

  create(data: Partial<plantas_agua_dulce>) {
    return this.plantasRepo.save(data);
  }

  async update(id: number, data: Partial<plantas_agua_dulce>) {
    await this.plantasRepo.update(id, data);
    return this.plantasRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.plantasRepo.delete(id);
  }
}