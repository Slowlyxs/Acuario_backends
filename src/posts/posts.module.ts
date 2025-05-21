import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from 'src/categories/entities/category.entity';
import { Posts } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Categories])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
