import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Participante } from './entities/participante.entity';
import { Inscripcion } from './entities/inscripcion.entity';
import { EventosService } from './services/eventos.service';
import { ParticipantesService } from './services/participantes.service';
import { EventosController } from './controllers/eventos.controller';
import { ParticipantesController } from './controllers/participantes.controller';
import { InscripcionesService } from './inscripciones/DTO/inscripciones.service';
import { InscripcionesController } from './inscripciones/DTO/inscripciones.controller';
import { ValidarExistenciaPipe } from './pipes/validar-existencia.pipe';

@Module({
  imports: [TypeOrmModule.forFeature([Evento, Participante, Inscripcion])],
  controllers: [EventosController, ParticipantesController, InscripcionesController],
  providers: [EventosService, ParticipantesService, InscripcionesService, ValidarExistenciaPipe],
})
export class EventosModule {}
