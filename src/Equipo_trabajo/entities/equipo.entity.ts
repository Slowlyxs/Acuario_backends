import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('equipo')
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  puesto: string;

  @Column()
  experiencia: string;

  @Column()
  especialidad: string;

  @Column()
  descripcion: string;

  @Column({ nullable: true })
  foto?: string; // URL o nombre del archivo, puede ser null
}
