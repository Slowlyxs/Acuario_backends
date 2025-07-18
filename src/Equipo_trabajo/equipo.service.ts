import { Injectable, NotFoundException } from '@nestjs/common';
import { Equipo } from './entity/equipo.entity';

@Injectable()
export class EquipoService {
  private equipo: Equipo[] = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      puesto: 'Fundador & Acuarista Experto',
      experiencia: '20 años',
      especialidad: 'Peces tropicales y marinos',
      descripcion: 'Biólogo marino con pasión por la acuariofilia desde la infancia.',
      foto: '',
    },
    {
      id: 2,
      nombre: 'María González',
      puesto: 'Especialista en Agua Dulce',
      experiencia: '12 años',
      especialidad: 'Peces de agua dulce y plantas',
      descripcion: 'Experta en ecosistemas de agua dulce y cuidado de plantas acuáticas.',
      foto: '',
    },
    {
      id: 3,
      nombre: 'Roberto Silva',
      puesto: 'Técnico en Sistemas',
      experiencia: '8 años',
      especialidad: 'Equipos y filtración',
      descripcion: 'Especialista en sistemas de filtración y equipos de acuarios.',
      foto: '',
    },
  ];

  findAll(): Equipo[] {
    return this.equipo;
  }

  findOne(id: number): Equipo {
    const miembro = this.equipo.find((e) => e.id === id);
    if (!miembro) {
      throw new NotFoundException(`Miembro con id ${id} no encontrado.`);
    }
    return miembro;
  }

  update(id: number, data: Partial<Equipo>): Equipo {
    const miembro = this.findOne(id);
    const actualizado = { ...miembro, ...data };
    const index = this.equipo.findIndex((e) => e.id === id);
    this.equipo[index] = actualizado;
    return actualizado;
  }

  uploadPhoto(id: number, filename: string): Equipo {
    const miembro = this.findOne(id);
    miembro.foto = filename;
    return miembro;
  }
}