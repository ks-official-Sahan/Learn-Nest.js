import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mysql://root:LeaveMe@666@localhost:3002/prisma_demo',
        },
      },
    });
    console.log('Connected to Database via Prisma');
  }
}
