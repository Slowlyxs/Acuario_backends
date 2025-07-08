import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { peces_agua_dulce_exoticos } from './entities/peces_agua_dulce_exoticos.entity';

@Controller('peces-agua-dulce-exoticos')
export class PecesAguaDulceExoticosController {
  constructor(
    @InjectRepository(peces_agua_dulce_exoticos)
    private readonly pecesRepo: Repository<peces_agua_dulce_exoticos>,
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
  create(@Body() data: Partial<peces_agua_dulce_exoticos>) {
    return this.pecesRepo.save(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<peces_agua_dulce_exoticos>) {
    await this.pecesRepo.update(id, data);
    return this.pecesRepo.findOneBy({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pecesRepo.delete(id);
  }
}