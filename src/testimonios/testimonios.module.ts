import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Testimonio, TestimonioSchema } from './schemas/testimonio.schema';
import { TestimoniosService } from './testimonios.service';
import { TestimoniosController } from './testimonios.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Testimonio.name, schema: TestimonioSchema }])],
  providers: [TestimoniosService],
  controllers: [TestimoniosController],
})
export class TestimoniosModule {}
