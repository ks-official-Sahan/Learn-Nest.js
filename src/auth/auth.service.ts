import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDTO } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// service files are here to handle the required operations

// @Injectable({})
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDTO) {
    const { email, password } = dto;

    // generate the password hash
    const hash = await argon.hash(password);

    // save new user in db
    try {
      const user = await this.prisma.user.create({
        data: {
          username: email,
          password: hash,
          name: 'Sahan',
          age: 20,
          id: '',
        },
      });

      delete user.password;

      // return the saved user
      return user;
    } catch (error) {
      console.log(error.message);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials already taken');
        }
      }
      console.log(error.message);
      // throw error;
    }
  }

  async signin(dto: AuthDTO) {
    const { email, password } = dto;

    try {
      // Find user by email
      const user = await this.prisma.user.findFirst({
        where: {
          username: email,
        },
      });

      // if user does not exist throw exception
      if (!user) throw new ForbiddenException('Credentials incorrect');

      // compare password
      const pwMatches = await argon.verify(user.password, password);

      // if password incorrect throw exception
      if (!pwMatches) throw new ForbiddenException('Incorrect Password');

      delete user.password;

      // return the relevant user
      // return user;
      return this.signToken(user.id, user.username);
    } catch (error) {
      console.log(error.message);
      // throw error;
    }
  }

  signToken(userId: string, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    return this.jwt.signAsync(payload, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: '30m',
    });
  }
}
