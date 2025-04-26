import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateEventoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsDateString()
  @IsOptional()
  fechaInicio?: string;

  @IsDateString()
  @IsOptional()
  fechaFin?: string;
}
