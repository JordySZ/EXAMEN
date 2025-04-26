import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Usar el filtro global
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // lanza error si alguien manda propiedades extra
    transform: true, // convierte automáticamente tipos (por ejemplo, fechas, números)
  }));

  await app.listen(3000);
}
bootstrap();
