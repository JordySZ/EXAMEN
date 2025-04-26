import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Evento } from './evento.entity';
import { Participante } from './participante.entity';

@Entity()
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Evento, (evento) => evento.inscripciones)
  evento: Evento;

  @ManyToOne(() => Participante, (participante) => participante.inscripciones)
  participante: Participante;

  @Column('timestamp')
  fechaInscripcion: Date;

  @Column({ default: 'pendiente' })
  estado: string;
}
