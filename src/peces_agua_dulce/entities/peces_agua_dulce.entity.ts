import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('peces_agua_dulce')
export class peces_agua_dulce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_comun: string;

  @Column()
   nombre_cientifico: string;

  @Column()
  tamaño_adulto: number;

  @Column()
  esperanza_vida: number;

  @Column()
  temperamento: string;

  @Column()
  temperatura_ideal: string;

}   