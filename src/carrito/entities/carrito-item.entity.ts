// src/carritos/entities/carrito-item.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Producto } from '../../productos/entity/producto.entity';

@Entity('carrito_items')
export class CarritoItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Carrito, (carrito) => carrito.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'carritoId' })
  carrito: Carrito;

  @ManyToOne(() => Producto, { eager: true })
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @Column('int')
  cantidad: number;
}
