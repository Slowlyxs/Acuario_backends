import { IsString, IsNumber, IsOptional, IsEnum, IsPhoneNumber } from 'class-validator';
import { CategoriaProducto } from '../entity/categoria.enum';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsString()
  descripcion: string;

  @IsEnum(CategoriaProducto, {
    message: `categoria debe ser uno de: ${Object.values(CategoriaProducto).join(', ')}`,
  })
  categoria: CategoriaProducto;

  @IsNumber()
  stock: number; 

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}
