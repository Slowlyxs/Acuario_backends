// src/producto/producto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './entities/producto.entity';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Producto>) {
    return this.productoService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Producto>) {
    return this.productoService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productoService.delete(Number(id));
  }
}
