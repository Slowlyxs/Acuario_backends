import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plantas_agua_dulce')
export class plantas_agua_dulce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_comun: string;

  @Column()
   nombre_cientifico: string;

  @Column()
  tipo_iluminacion: number;

  @Column()
  necesita_co2: String;

  @Column()
  altura_maxima: string;

  @Column()
  dificultad_cultivo: string;

}   