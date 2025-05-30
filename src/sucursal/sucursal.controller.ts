// src/sucursal/sucursal.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Sucursal } from './entities/sucursal.entity';
import { SucursalService } from 'src/sucursal/sucursal.service';

@Controller('sucursales')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  @Get()
  findAll() {
    return this.sucursalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucursalService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Sucursal>) {
    return this.sucursalService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Sucursal>) {
    return this.sucursalService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sucursalService.delete(Number(id));
  }
}
