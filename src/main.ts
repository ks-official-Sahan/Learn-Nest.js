import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(() => {
    console.log(`Nest App is Listening on Port ${port}`);
  });
}
bootstrap();
