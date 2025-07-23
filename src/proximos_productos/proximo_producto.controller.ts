import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProximoProductoService } from './proximo_producto.service';
import { CreateProximoProductoDto } from './dto/proximo_producto.dto';
import { UpdateProximoProductoDto } from './dto/update-proximo-producto.dto';

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

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProximoProductoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
