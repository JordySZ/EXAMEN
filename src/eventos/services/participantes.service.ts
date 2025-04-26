import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participante } from '../entities/participante.entity';
import { CreateParticipanteDto } from '../dto/create-participante.dto';
import { UpdateParticipanteDto } from '../dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(
    @InjectRepository(Participante)
    private readonly participanteRepository: Repository<Participante>,
  ) {}

  async create(createParticipanteDto: CreateParticipanteDto): Promise<Participante> {
    const participante = this.participanteRepository.create(createParticipanteDto);
    return this.participanteRepository.save(participante);
  }

  async findAll(): Promise<Participante[]> {
    return this.participanteRepository.find({ relations: ['inscripciones'] });
  }

  async findOne(id: number): Promise<Participante> {
    const participante = await this.participanteRepository.findOne({
      where: { id },
      relations: ['inscripciones'],
    });
    if (!participante) {
      throw new NotFoundException(`Participante con ID ${id} no encontrado`);
    }
    return participante;
  }

  async update(id: number, updateParticipanteDto: UpdateParticipanteDto): Promise<Participante> {
    const participante = await this.findOne(id);
    Object.assign(participante, updateParticipanteDto);
    return this.participanteRepository.save(participante);
  }

  async remove(id: number): Promise<void> {
    const participante = await this.findOne(id);
    await this.participanteRepository.remove(participante);
  }
}
