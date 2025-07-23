import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProximoProducto, ProximoProductoSchema } from './schema/proximo_producto.schema';
import { ProximoProductoController } from './proximo_producto.controller';
import { ProximoProductoService } from './proximo_producto.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProximoProducto.name, schema: ProximoProductoSchema },
    ]),
  ],
  controllers: [ProximoProductoController],
  providers: [ProximoProductoService],
})
export class ProximoProductoModule {}
