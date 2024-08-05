import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // filter out only required data
    }),
  ); // using validation pipes defined in DTOs

  await app.listen(port).then(() => {
    console.log(`Nest App is Listening on Port ${port}`);
  });
}
bootstrap();
