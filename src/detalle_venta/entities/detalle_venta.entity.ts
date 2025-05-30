import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sucursal } from 'src/sucursal/entities/sucursal.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Entity('detalle_venta')
export class DetalleVenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @ManyToOne(() => Sucursal, venta => venta.detalles, { eager: true })
  venta: Sucursal;

  @ManyToOne(() => Producto, producto => producto.detalles, { eager: true })
  producto: Producto;
}