// src/venta/venta.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VentaService } from './venta.service';
import { Venta } from './entities/venta.entity';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventaService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Venta>) {
    return this.ventaService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Venta>) {
    return this.ventaService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ventaService.delete(Number(id));
  }
}
