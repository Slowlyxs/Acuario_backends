import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    // Aqui se colocan los endpoints
  ],
  providers: [
    AppService,
    // Servicios adicionales o complementarios
  ],
})
export class AppModule {}
