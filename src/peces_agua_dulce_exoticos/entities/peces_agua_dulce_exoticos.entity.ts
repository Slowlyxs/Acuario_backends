import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('peces_agua_dulce_exoticos')
export class peces_agua_dulce_exoticos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_comun: string;

  @Column()
   nombre_cientifico: string;

  @Column()
  pais_origen: number;

  @Column()
  nivel_dificultad: String;

  @Column()
  requerimientos_especiales: string;

  @Column()
  compatibilidad: string;

}   