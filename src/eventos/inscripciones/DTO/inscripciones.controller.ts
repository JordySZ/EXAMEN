import { Controller, Post, Body, Get } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcionDto } from './create-inscripcion.dto';
import { ValidarExistenciaPipe } from '../../pipes/validar-existencia.pipe';

@Controller('inscripciones')
export class InscripcionesController {
  constructor(private readonly inscripcionesService: InscripcionesService) {}

  @Post()
  create(@Body(ValidarExistenciaPipe) createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionesService.create(createInscripcionDto);
  }

  @Get()
  findAll() {
    return this.inscripcionesService.findAll();
  }
}
