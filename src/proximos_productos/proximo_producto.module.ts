import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProximoProducto, ProximoProductoSchema } from './schema/proximo_producto.schema';
import { ProximoProductoService } from './proximo_producto.service';
import { ProximoProductoController } from './proximo_producto.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProximoProducto.name, schema: ProximoProductoSchema }])],
  controllers: [ProximoProductoController],
  providers: [ProximoProductoService],
})
export class ProximoProductoModule {}
