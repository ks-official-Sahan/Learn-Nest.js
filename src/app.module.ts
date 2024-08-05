import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, UserModule, ProductModule],
})
export class AppModule {}
