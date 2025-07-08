import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentosAguaDulce } from './entities/alimentos_agua_dulce.entity';
import { AlimentosAguaDulceController } from './alimentos_agua_dulce.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlimentosAguaDulce])],
  controllers: [AlimentosAguaDulceController],
})
export class AlimentosAguaDulceModule {}