import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plantas_agua_dulce } from './entities/plantas_agua_dulce.entity';

@Controller('plantas-agua-dulce')
export class PlantasAguaDulceController {
  constructor(
    @InjectRepository(plantas_agua_dulce)
    private readonly plantasRepo: Repository<plantas_agua_dulce>,
  ) {}

  @Get()
  findAll() {
    return this.plantasRepo.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.plantasRepo.findOneBy({ id });
  }

  @Post()
  create(@Body() data: Partial<plantas_agua_dulce>) {
    return this.plantasRepo.save(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<plantas_agua_dulce>) {
    await this.plantasRepo.update(id, data);
    return this.plantasRepo.findOneBy({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.plantasRepo.delete(id);
    }
}