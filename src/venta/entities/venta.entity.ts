// src/venta/entities/venta.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,              // ← Importa OneToMany
} from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Entity('venta')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  fecha: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Cliente, cliente => cliente.sucursales, { eager: true })
  cliente: Cliente;


  @OneToMany(() => DetalleVenta, detalle => detalle.venta)
  detalles: DetalleVenta[];
}
  