import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inscripcion } from './inscripcion.entity';

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    fechaInicio: string;  
  
    @Column()
    fechaFin: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.evento)
  inscripciones: Inscripcion[];
}
