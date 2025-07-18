import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentosAguaDulceModule } from './alimentos_agua_dulce/alimentos_agua_dulce.module';
import { PecesAguaDulceModule } from './peces_agua_dulce/peces_agua_dulce.module';
import { PecesAguaDulceExoticosModule } from './peces_agua_dulce_exoticos/peces_agua_dulce_exoticos.module';
import { PlantasAguaDulceModule } from './plantas_agua_dulce/plantas_agua_dulce.module';
import { EquipoModule } from './Equipo_trabajo/equipo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: false,
    }),
    AlimentosAguaDulceModule,
    PecesAguaDulceModule,
    PecesAguaDulceExoticosModule,
    PlantasAguaDulceModule,
    EquipoModule,
  ],
  controllers: [
    AppController,
    // Aquí se colocan los endpoints
  ],
  providers: [
    AppService,
    // Servicios adicionales o complementarios
  ],
})
export class AppModule {
  // Este módulo es el punto de entrada de la aplicación
  // Aquí se importan los módulos necesarios y se configuran los controladores y servicios
}