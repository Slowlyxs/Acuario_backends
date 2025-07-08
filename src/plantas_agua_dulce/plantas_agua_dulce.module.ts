import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { plantas_agua_dulce } from './entities/plantas_agua_dulce.entity';
import { PlantasAguaDulceController } from './plantas_agua_dulce.controller';
import { PlantasAguaDulceService } from './plantas_agua_dulce.service';

@Module({
  imports: [TypeOrmModule.forFeature([plantas_agua_dulce])],
  controllers: [PlantasAguaDulceController],
  providers: [PlantasAguaDulceService],
})
export class PlantasAguaDulceModule {}