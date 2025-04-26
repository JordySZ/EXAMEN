import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateParticipanteDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
