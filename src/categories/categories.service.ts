import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>,
    ) { }

    create(dto: CreateCategoryDto): Promise<Category> {
        const category = this.categoryRepo.create(dto);
        return this.categoryRepo.save(category);
    }

    findAll(): Promise<Category[]> {
        return this.categoryRepo.find();
    }

    findOne(id: string): Promise<Category | null> {
        return this.categoryRepo.findOneBy({ id });
    }

    async update(id: string, dto: UpdateCategoryDto): Promise<Category | null> {
        await this.categoryRepo.update(id, dto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        return this.categoryRepo.delete(id).then(() => undefined);
    }
}
