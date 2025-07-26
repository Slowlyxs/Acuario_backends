import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { CarritoItem } from './entities/carrito-item.entity';
import { Producto } from '../productos/entity/producto.entity'; // ruta correcta
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carrito, CarritoItem, Producto]),
  ],
  providers: [CarritoService],
  controllers: [CarritoController],
  exports: [CarritoService],
})
export class CarritoModule {}
