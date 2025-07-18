import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  getEquipo() {
    return this.equipoService.findAll();
  }

  @Get(':id')
  getMiembro(@Param('id') id: string) {
    return this.equipoService.findOne(+id);
  }

  @Put(':id')
  updateMiembro(@Param('id') id: string, @Body() body) {
    return this.equipoService.update(+id, body);
  }

  @Put(':id/foto')
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        destination: './uploads/equipo',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `foto-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  uploadFoto(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    return this.equipoService.uploadPhoto(+id, file.filename);
  }
}