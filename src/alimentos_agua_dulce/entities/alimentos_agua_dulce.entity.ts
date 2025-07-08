import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alimentos_agua_dulce')
export class AlimentosAguaDulce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_producto: string;

  @Column()
   tipo_alimento: string;

  @Column()
  marca: number;

  @Column()
  composicion_nutricional: number;

  @Column()
  fecha_vencimiento: string;

  @Column()
  especies_recomendadas: string;

}   