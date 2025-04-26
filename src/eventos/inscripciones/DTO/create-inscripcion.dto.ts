import { IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateInscripcionDto {
  @IsInt()
  eventoId: number;

  @IsInt()
  participanteId: number;

  @IsOptional()
  @IsDateString()
  fechaInscripcion?: string;

  @IsOptional()
  estado?: string;
}
