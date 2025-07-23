import { IsNotEmpty, IsArray, ValidateNested, IsMongoId, IsNumber, Min, IsEnum, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

class ProductoItemDto {
  @IsMongoId()
  productoId: string;

  @IsNumber()
  @Min(1)
  cantidad: number;

  @IsNumber()
  @Min(0)
  precioUnitario: number;
}

export class CreatePedidoDto {
  @IsMongoId()
  usuarioId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoItemDto)
  productos: ProductoItemDto[];

  @IsNumber()
  @Min(0)
  total: number;

  @IsEnum(['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'])
  @IsOptional()
  estado?: string;

  @IsOptional()
  direccionEnvio?: {
    calle?: string;
    ciudad?: string;
    estado?: string;
    codigoPostal?: string;
    pais?: string;
  };

  @IsOptional()
  @IsString()
  metodoPago?: string;
}
