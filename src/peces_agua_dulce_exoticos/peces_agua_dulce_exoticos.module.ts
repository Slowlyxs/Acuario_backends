import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { peces_agua_dulce_exoticos } from './entities/peces_agua_dulce_exoticos.entity';
import { PecesAguaDulceExoticosController } from './peces_agua_dulce_exoticos.controller';
import { PecesAguaDulceExoticosService } from './peces_agua_dulce_exoticos.service';

@Module({
  imports: [TypeOrmModule.forFeature([peces_agua_dulce_exoticos])],
  controllers: [PecesAguaDulceExoticosController],
  providers: [PecesAguaDulceExoticosService],
})
export class PecesAguaDulceExoticosModule {}