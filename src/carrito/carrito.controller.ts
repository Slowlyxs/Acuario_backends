import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';

@Controller('carritos')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post()
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritoService.create(createCarritoDto);
  }

  @Get()
  findAll() {
    return this.carritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoService.remove(id);
  }
}
