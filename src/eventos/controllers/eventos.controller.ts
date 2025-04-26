import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { EventosService } from '../services/eventos.service';
import { CreateEventoDto } from '../dto/create-evento.dto';
import { UpdateEventoDto } from '../dto/update-evento.dto';
import { Evento } from '../entities/evento.entity';
@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}
  
  @Post()
  async create(@Body() createEventoDto: CreateEventoDto): Promise<Evento> {
    return this.eventosService.create(createEventoDto);
  }

  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(id, updateEventoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.remove(id);
  }
}
