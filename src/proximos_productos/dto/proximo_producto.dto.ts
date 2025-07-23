import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateProximoProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  @IsOptional()
  fechaLlegada?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsString()
  @IsOptional()
  categoria?: string;
}
