import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @MessagePattern('login')
  login(@Payload() data: Record<string, string>): void {}

  @MessagePattern('sign-up')
  async signUp(@Payload() data: Record<string, string>): Promise<void> {
    await this.service.registerUser(data);
  }
}
