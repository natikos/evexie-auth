import { IsEmail, IsStrongPassword, MaxLength } from 'class-validator';
import { DEFAULT_FIELD_MAX_LENGTH } from '~const';

export class RegisterDto {
  @MaxLength(DEFAULT_FIELD_MAX_LENGTH)
  firstName: string;

  @MaxLength(DEFAULT_FIELD_MAX_LENGTH)
  lastName: string;

  @IsStrongPassword()
  password: string;

  @IsEmail()
  email: string;
}
