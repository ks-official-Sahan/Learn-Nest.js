import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable({})
@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signin() {
    return { msg: 'Sign In' };
  }

  signup() {
    return { msg: 'Sign Up' };
  }
}
