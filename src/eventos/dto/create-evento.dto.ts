import { IsString, IsDateString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fechaInicio: string;  // Asegúrate de que esté correctamente tipado y validado

  @IsDateString()
  fechaFin: string;
}
