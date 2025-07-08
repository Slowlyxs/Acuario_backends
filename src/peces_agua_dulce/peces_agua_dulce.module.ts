import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { peces_agua_dulce } from './entities/peces_agua_dulce.entity';
import { PecesAguaDulceController } from './peces_agua_dulce.controller';
import { PecesAguaDulceService } from "./peces_agua_dulce.service"

@Module({
  imports: [TypeOrmModule.forFeature([peces_agua_dulce])],
  controllers: [PecesAguaDulceController],
  providers: [PecesAguaDulceService],
})
export class   PecesAguaDulceModule {}