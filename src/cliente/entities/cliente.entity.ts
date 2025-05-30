import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sucursal } from 'src/sucursal/entities/sucursal.entity';  // Cambié Venta por Sucursal

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  // Cambié Venta por Sucursal
  @OneToMany(() => Sucursal, sucursal => sucursal.id)  // Cambié la relación
  sucursales: Sucursal[]; // Esta propiedad almacena las sucursales asociadas al cliente
}
