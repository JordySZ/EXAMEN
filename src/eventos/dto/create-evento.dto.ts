import { IsString, IsDateString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fechaInicio: string; 

  @IsDateString()
  fechaFin: string;
}
