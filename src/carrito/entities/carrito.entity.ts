// carrito.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../../users/user.entity';
import { CarritoItem } from './carrito-item.entity';

@Entity('carritos')
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => CarritoItem, (item) => item.carrito, { cascade: true, eager: true })
  items: CarritoItem[];
}
