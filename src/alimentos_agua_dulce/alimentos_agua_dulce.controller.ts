import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlimentosAguaDulce } from './entities/alimentos_agua_dulce.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('alimentos-agua-dulce')
export class AlimentosAguaDulceController {
  constructor(
    @InjectRepository(AlimentosAguaDulce)
    private readonly alimentosRepo: Repository<AlimentosAguaDulce>,
  ) {}

  @Get()
  findAll() {
    return this.alimentosRepo.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alimentosRepo.findOneBy({ id });
  }

  @Post()
  create(@Body() data: Partial<AlimentosAguaDulce>) {
    return this.alimentosRepo.save(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<AlimentosAguaDulce>) {
    await this.alimentosRepo.update(id, data);
    return this.alimentosRepo.findOneBy({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.alimentosRepo.delete(id);
  }
}