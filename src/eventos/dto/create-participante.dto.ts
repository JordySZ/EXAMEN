import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
