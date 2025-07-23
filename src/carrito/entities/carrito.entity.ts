import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('carritos')
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuarioId: string; // Id del usuario que posee este carrito

  @Column('jsonb')
  items: {
    productoId: string;
    cantidad: number;
  }[];
}
