import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Inscripcion } from '../../entities/inscripcion.entity';
import { CreateInscripcionDto } from './create-inscripcion.dto';
import { Evento } from '../../entities/evento.entity';
import { Participante } from '../../entities/participante.entity';

@Injectable()
export class InscripcionesService {
  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripcionRepository: Repository<Inscripcion>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createInscripcionDto: CreateInscripcionDto): Promise<Inscripcion> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const inscripcion = new Inscripcion();
      inscripcion.evento = { id: createInscripcionDto.eventoId } as Evento;
      inscripcion.participante = { id: createInscripcionDto.participanteId } as Participante;
      inscripcion.fechaInscripcion = createInscripcionDto.fechaInscripcion
        ? new Date(createInscripcionDto.fechaInscripcion)
        : new Date();
      inscripcion.estado = createInscripcionDto.estado || 'pendiente';

      const result = await queryRunner.manager.save(inscripcion);

      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<Inscripcion[]> {
    return this.inscripcionRepository.find({
      relations: ['evento', 'participante'],
    });
  }
}
