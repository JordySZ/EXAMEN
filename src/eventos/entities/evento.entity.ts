import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inscripcion } from './inscripcion.entity';

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    fechaInicio: string;  // Asegúrate de que esté correctamente definido como string, ya que esperará una fecha
  
    @Column()
    fechaFin: string;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.evento)
  inscripciones: Inscripcion[];
}
