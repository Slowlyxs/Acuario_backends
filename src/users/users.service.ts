import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id });
  }

  findByUsername(username: string) {
    return this.usersRepo.findOneBy({ username });
  }

  create(data: Partial<User>) {
    return this.usersRepo.save(data);
  }

  async update(id: number, data: Partial<User>) {
    await this.usersRepo.update(id, data);
    return this.usersRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.usersRepo.delete(id);   
    }
    async removeAll() {
        return this.usersRepo.clear();
    }
}