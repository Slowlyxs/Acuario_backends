import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CategoriaProducto } from './categoria.enum';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  descripcion: string;

  @Column({
    type: 'enum',
    enum: CategoriaProducto,
  })
  categoria: CategoriaProducto;

  @Column()
  stock: number;

  @Column({ nullable: true })
  imagenUrl: string;
}
