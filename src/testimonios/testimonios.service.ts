import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Testimonio, TestimonioDocument } from './schemas/testimonio.schema';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';

@Injectable()
export class TestimoniosService {
  constructor(@InjectModel(Testimonio.name) private testimonioModel: Model<TestimonioDocument>) {}

  async create(createTestimonioDto: CreateTestimonioDto): Promise<Testimonio> {
    const testimonio = new this.testimonioModel(createTestimonioDto);
    return testimonio.save();
  }

  async findAll(): Promise<Testimonio[]> {
    return this.testimonioModel.find().exec();
  }
}
