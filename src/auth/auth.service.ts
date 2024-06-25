import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Auth } from './models';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth) private readonly authRepository: typeof Auth,
  ) {}

  async registerUser(data: Record<string, string>) {
    await this.authRepository.create(data);
  }
}
