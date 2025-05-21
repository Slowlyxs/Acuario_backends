import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}