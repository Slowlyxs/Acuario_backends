import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { peces_agua_dulce } from './entities/peces_agua_dulce.entity';

@Controller('peces-agua-dulce')
export class PecesAguaDulceController {
  constructor(
    @InjectRepository(peces_agua_dulce)
    private readonly pecesRepo: Repository<peces_agua_dulce>,
  ) {}

  @Get()
  findAll() {
    return this.pecesRepo.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pecesRepo.findOneBy({ id });
  }

  @Post()
  create(@Body() data: Partial<peces_agua_dulce>) {
    return this.pecesRepo.save(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<peces_agua_dulce>) {
    await this.pecesRepo.update(id, data);
    return this.pecesRepo.findOneBy({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pecesRepo.delete(id);
  }
}