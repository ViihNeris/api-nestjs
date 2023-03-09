import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'Hello API, I have signed up!' };
  }

  signin() {
    return { msg: 'Hello API, I have signin!' };
  }
}
