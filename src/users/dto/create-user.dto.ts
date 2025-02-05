import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  githubUsername?: string;

  @IsOptional()
  @IsString()
  githubAccessToken?: string;

  // Pour éviter que le client définisse son rôle, on peut ne pas l'exposer ou le forcer ici.
  // On pourra par exemple le setter par défaut à 'USER'
  @IsOptional()
  @IsString()
  role?: string;
}
