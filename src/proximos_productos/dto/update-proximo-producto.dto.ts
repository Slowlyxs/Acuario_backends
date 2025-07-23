import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateProximoProductoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fechaLlegada?: Date;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsString()
  categoria?: string;
}
