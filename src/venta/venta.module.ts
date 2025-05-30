// src/venta/venta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Cliente])],
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule {}
