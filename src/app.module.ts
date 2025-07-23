import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { EquipoModule } from './Equipo_trabajo/equipo.module';
import { CarritoModule } from './carrito/carrito.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TestimoniosModule } from './testimonios/testimonios.module';
import { AuthModule } from './auth/auth.module';
import { ProximoProductoModule } from './proximos_productos/proximo_producto.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl:process.env.DB_SSL === 'true',
    }),

    // MongoDB Atlas
    MongooseModule.forRoot(process.env.MONGODB_URI!),

    // Otros módulos
    CarritoModule,
    EquipoModule,
    ProductosModule,
    PedidosModule,
    TestimoniosModule,
    ProximoProductoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
