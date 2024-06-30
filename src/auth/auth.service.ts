import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '~const';
import { Auth, Users } from '~entities';
import { Drizzle } from '~types';
import { RegisterDto } from './dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject(DRIZZLE) private readonly db: Drizzle) {}

  async registerUser(data: RegisterDto) {
    const { password, firstName, lastName, email } = data;
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);

    await this.db.transaction(async (tx) => {
      const usersResult = await tx
        .insert(Users)
        .values({ firstName, lastName, email })
        .returning({ id: Users.id });

      await tx
        .insert(Auth)
        .values({ id: usersResult[0].id, password: hashedPassword });
    });
  }
}
