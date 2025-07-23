import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class CreateTestimonioDto {
  @IsString()
  nombreCliente: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  comentario?: string;
}
