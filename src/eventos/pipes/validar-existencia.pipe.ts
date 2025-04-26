import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Evento } from '../entities/evento.entity';
  import { Participante } from '../entities/participante.entity';
  
  @Injectable()
  export class ValidarExistenciaPipe implements PipeTransform {
    constructor(
      @InjectRepository(Evento)
      private readonly eventoRepository: Repository<Evento>,
  
      @InjectRepository(Participante)
      private readonly participanteRepository: Repository<Participante>,
    ) {}
  
    async transform(value: any, metadata: ArgumentMetadata) {
      const { eventoId, participanteId } = value;
  
      if (eventoId) {
        const evento = await this.eventoRepository.findOneBy({ id: eventoId });
        if (!evento) {
          throw new NotFoundException(`Evento con ID ${eventoId} no encontrado`);
        }
      }
  
      if (participanteId) {
        const participante = await this.participanteRepository.findOneBy({ id: participanteId });
        if (!participante) {
          throw new NotFoundException(`Participante con ID ${participanteId} no encontrado`);
        }
      }
  
      return value;
    }
  }
  