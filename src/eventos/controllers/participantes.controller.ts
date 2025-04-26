import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ParticipantesService } from '../services/participantes.service';
import { CreateParticipanteDto } from '../dto/create-participante.dto';
import { UpdateParticipanteDto } from '../dto/update-participante.dto';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participantesService.create(createParticipanteDto);
  }

  @Get()
  findAll() {
    return this.participantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateParticipanteDto: UpdateParticipanteDto) {
    return this.participantesService.update(id, updateParticipanteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.remove(id);
  }
}
