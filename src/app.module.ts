import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';
import { ClienteModule } from './cliente/cliente.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { VentaModule } from './venta/venta.module';

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
       ssl:true
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
    ProductoModule,
    DetalleVentaModule,
    ClienteModule,
    VentaModule,
    SucursalModule

  ],
  controllers: [
    AppController,
    // Aqui se colocan los endpoints
  ],
  providers: [
    AppService,
    // Servicios adicionales o complementarios
  ],
})
export class AppModule { }
