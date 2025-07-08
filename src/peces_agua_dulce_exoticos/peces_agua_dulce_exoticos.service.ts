import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { peces_agua_dulce_exoticos } from './entities/peces_agua_dulce_exoticos.entity';

@Injectable()
export class PecesAguaDulceExoticosService {
  constructor(
    @InjectRepository(peces_agua_dulce_exoticos)
    private readonly pecesRepo: Repository<peces_agua_dulce_exoticos>,
  ) {}

  findAll() {
    return this.pecesRepo.find();
  }

  findOne(id: number) {
    return this.pecesRepo.findOneBy({ id });
  }

  create(data: Partial<peces_agua_dulce_exoticos>) {
    return this.pecesRepo.save(data);
  }

  async update(id: number, data: Partial<peces_agua_dulce_exoticos>) {
    await this.pecesRepo.update(id, data);
    return this.pecesRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.pecesRepo.delete(id);
  }
}