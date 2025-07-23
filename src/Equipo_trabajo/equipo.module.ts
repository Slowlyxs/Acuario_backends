import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { Equipo } from './entities/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo])],
  providers: [EquipoService],
  controllers: [EquipoController],
})
export class EquipoModule {}
