// src/carritos/services/carrito.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { CarritoItem } from './entities/carrito-item.entity';
import { Producto } from '../productos/entity/producto.entity';
import { User } from '.././users/user.entity';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private carritoRepo: Repository<Carrito>,

    @InjectRepository(CarritoItem)
    private itemRepo: Repository<CarritoItem>,

    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) { }

  async getCarritoByUser(userId: number): Promise<Carrito> {
    let carrito = await this.carritoRepo.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.producto'],
    });

    if (!carrito) {
      carrito = this.carritoRepo.create({
        user: { id: userId } as User,
        items: [],
      });
      await this.carritoRepo.save(carrito);
    }

    return carrito;
  }

  async addItem(userId: number, dto: AddItemDto) {
    const carrito = await this.getCarritoByUser(userId);

    // Aquí está la corrección: findOne con objeto where
    const producto = await this.productoRepo.findOne({
      where: { id: dto.productoId },
    });

    if (!producto) throw new NotFoundException('Producto no encontrado');
    if (dto.cantidad <= 0)
      throw new BadRequestException('Cantidad debe ser mayor a cero');
    if (dto.cantidad > producto.stock)
      throw new BadRequestException('Cantidad supera stock disponible');

    let item = carrito.items.find(
      (i) => i.producto.id === dto.productoId,
    );

    if (item) {
      const nuevaCantidad = item.cantidad + dto.cantidad;
      if (nuevaCantidad > producto.stock)
        throw new BadRequestException(
          'Cantidad total supera stock disponible',
        );
      item.cantidad = nuevaCantidad;
      await this.itemRepo.save(item);
    } else {
      item = this.itemRepo.create({
        carrito,
        producto,
        cantidad: dto.cantidad,
      });
      carrito.items.push(item);
      await this.itemRepo.save(item);
    }

    return this.getCarritoByUser(userId);
  }

  async updateItem(userId: number, productoId: string, dto: UpdateItemDto) {
    const carrito = await this.getCarritoByUser(userId);
    const item = carrito.items.find((i) => i.producto.id === productoId);

    if (!item) throw new NotFoundException('Producto no está en el carrito');

    if (dto.cantidad <= 0) {
      // eliminar item si cantidad 0 o menos
      await this.itemRepo.remove(item);
      return this.getCarritoByUser(userId);
    }

    if (dto.cantidad > item.producto.stock)
      throw new BadRequestException('Cantidad supera stock disponible');

    item.cantidad = dto.cantidad;
    await this.itemRepo.save(item);
    return this.getCarritoByUser(userId);
  }

  async removeItem(userId: number, productoId: string) {
    const carrito = await this.getCarritoByUser(userId);
    const item = carrito.items.find((i) => i.producto.id === productoId);

    if (!item) throw new NotFoundException('Producto no está en el carrito');

    await this.itemRepo.remove(item);
    return this.getCarritoByUser(userId);
  }

  async clearCarrito(userId: number) {
    const carrito = await this.getCarritoByUser(userId);
    await this.itemRepo.remove(carrito.items);
    return this.getCarritoByUser(userId);
  }

  async comprar(userId: number) {
    const carrito = await this.getCarritoByUser(userId);

    // validar stock
    for (const item of carrito.items) {
      if (item.cantidad > item.producto.stock)
        throw new BadRequestException(
          `Producto ${item.producto.nombre} no tiene suficiente stock`,
        );
    }

    // descontar stock
    for (const item of carrito.items) {
      item.producto.stock -= item.cantidad;
      await this.productoRepo.save(item.producto);
    }

    // vaciar carrito
    await this.itemRepo.remove(carrito.items);

    return { mensaje: 'Compra realizada con éxito' };
  }
}
