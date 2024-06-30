import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @MessagePattern('sign-up')
  async signUp(@Payload() data: RegisterDto): Promise<void> {
    await this.service.registerUser(data);
  }
}
