import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';

@Controller('testimonios')
export class TestimoniosController {
  constructor(private readonly testimoniosService: TestimoniosService) {}

  @Post()
  create(@Body() createTestimonioDto: CreateTestimonioDto) {
    return this.testimoniosService.create(createTestimonioDto);
  }

  @Get()
  findAll() {
    return this.testimoniosService.findAll();
  }
}
