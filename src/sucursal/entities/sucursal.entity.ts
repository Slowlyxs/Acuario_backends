import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';



@Entity('sucursal')
export class Sucursal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 200 })
  direccion: string;

  @Column({ length: 100 })
  ciudad: string;

  @Column({ length: 100 })
  estado: string;

  @Column({ length: 20 })
  telefono: string;

  @CreateDateColumn({ type: 'timestamp' })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  fechaActualizacion: Date;

  
  @OneToMany(() => DetalleVenta, detalle => detalle.venta)
  detalles: DetalleVenta[];


}
