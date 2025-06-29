// src/sucursal/sucursal.module.ts
import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sucursal } from './entities/sucursal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal])], // Importando la entidad
  controllers: [SucursalController],
  providers: [SucursalService],
})
export class SucursalModule {}
