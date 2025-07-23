import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entity/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) { }

    create(createProductoDto: CreateProductoDto): Promise<Producto> {
        const producto = this.productoRepository.create(createProductoDto);
        return this.productoRepository.save(producto);
    }

    findAll(): Promise<Producto[]> {
        return this.productoRepository.find();
    }

    findOne(id: string): Promise<Producto | null> {
        return this.productoRepository.findOneBy({ id });
    }


    async remove(id: string): Promise<void> {
        await this.productoRepository.delete(id);
    }
}
