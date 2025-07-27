import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('carrito')
@UseGuards(AuthGuard('jwt')) // ✅ Asumiendo que usas la estrategia 'jwt'
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Get(':userId')
  async getCarrito(@Param('userId') userId: number) {
    return this.carritoService.getCarritoByUser(userId);
  }

  @Post(':userId')
  async addItem(@Param('userId') userId: number, @Body() dto: AddItemDto) {
    return this.carritoService.addItem(userId, dto);
  }

  @Put(':userId/:productoId')
  async updateItem(
    @Param('userId') userId: number,
    @Param('productoId') productoId: string,
    @Body() dto: UpdateItemDto,
  ) {
    return this.carritoService.updateItem(userId, productoId, dto);
  }

  @Delete(':userId/:productoId')
  async removeItem(
    @Param('userId') userId: number,
    @Param('productoId') productoId: string,
  ) {
    return this.carritoService.removeItem(userId, productoId);
  }

  @Delete(':userId')
  async clearCarrito(@Param('userId') userId: number) {
    return this.carritoService.clearCarrito(userId);
  }

  @Post('comprar/:userId')
  async comprar(@Param('userId') userId: number) {
    return this.carritoService.comprar(userId);
  }
}
