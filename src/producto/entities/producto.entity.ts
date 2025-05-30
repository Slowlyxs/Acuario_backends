import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  stock: number;

  @Column({ type: 'enum', enum: ['dulce', 'salada'], nullable: true })
  tipo_agua: 'dulce' | 'salada';

  @Column({ nullable: true })
  tipo_pez: string;

  @OneToMany(() => DetalleVenta, detalle => detalle.producto)
  detalles: DetalleVenta[];
}
