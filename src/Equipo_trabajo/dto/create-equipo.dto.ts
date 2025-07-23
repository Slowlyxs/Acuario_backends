import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEquipoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  puesto: string;

  @IsNotEmpty()
  @IsString()
  experiencia: string;

  @IsNotEmpty()
  @IsString()
  especialidad: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  foto?: string;
}
