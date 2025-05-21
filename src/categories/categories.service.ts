import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoryRepo: Repository<Categories>,
    ) { }

    create(dto: CreateCategoryDto): Promise<Categories> {
        const category = this.categoryRepo.create(dto);
        return this.categoryRepo.save(category);
    }

    findAll(): Promise<Categories[]> {
        return this.categoryRepo.find();
    }

    findOne(id: string): Promise<Categories | null> {
        return this.categoryRepo.findOneBy({ id });
    }

    async update(id: string, dto: UpdateCategoryDto): Promise<Categories | null> {
        await this.categoryRepo.update(id, dto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        return this.categoryRepo.delete(id).then(() => undefined);
    }
}
