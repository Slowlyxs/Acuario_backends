import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProximoProductoService } from './proximo_producto.service';
import { CreateProximoProductoDto } from './dto/proximo_producto.dto';

@Controller('proximos-productos')
export class ProximoProductoController {
  constructor(private readonly service: ProximoProductoService) {}

  @Post()
  create(@Body() dto: CreateProximoProductoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
