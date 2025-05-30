import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  // Obtener todos los clientes
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  // Obtener un cliente por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(Number(id));
  }

  // Crear un nuevo cliente
  @Post()
  create(@Body() cliente: Partial<Cliente>) {
    // Asegúrate de que la lógica en el servicio maneja correctamente la relación con Sucursal
    return this.clienteService.create(cliente);
  }

  // Actualizar un cliente existente
  @Put(':id')
  update(@Param('id') id: string, @Body() cliente: Partial<Cliente>) {
    // Al igual que con crear, el servicio debe manejar las actualizaciones y relaciones correctamente
    return this.clienteService.update(Number(id), cliente);
  }

  // Eliminar un cliente por ID
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clienteService.delete(Number(id));
  }
}
