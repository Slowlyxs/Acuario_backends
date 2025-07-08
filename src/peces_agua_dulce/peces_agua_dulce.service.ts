import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { peces_agua_dulce } from './entities/peces_agua_dulce.entity';

@Injectable()
export class PecesAguaDulceService {
  constructor(
    @InjectRepository(peces_agua_dulce)
    private readonly pecesRepo: Repository<peces_agua_dulce>,
  ) {}

  findAll() {
    return this.pecesRepo.find();
  }

  findOne(id: number) {
    return this.pecesRepo.findOneBy({ id });
  }

  create(data: Partial<peces_agua_dulce>) {
    return this.pecesRepo.save(data);
  }

  async update(id: number, data: Partial<peces_agua_dulce>) {
    await this.pecesRepo.update(id, data);
    return this.pecesRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.pecesRepo.delete(id);
  }
   }