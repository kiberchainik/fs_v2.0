import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RestrictAccessMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const allowedSwaggerPaths = ['/developers'] // Swagger открыт всем
    const app = await NestFactory.create(AppModule)
    const config = app.get(ConfigService)
    const allowedOrigins = [config.getOrThrow<string>('ALLOWED_ORIGIN')] // Только твой фронт

    const origin = req.headers.origin;
    const path = req.path;

    // Разрешаем Swagger без проверки Origin
    if (allowedSwaggerPaths.some(swaggerPath => path.startsWith(swaggerPath))) {
      return next();
    }

    // Разрешаем запросы без Origin (например, внутренние серверные запросы)
    if (!origin) {
      return next();
    }

    // Разрешаем запросы только от указанного фронта
    if (allowedOrigins.includes(origin)) {
      return next();
    }

    // Если не прошло ни одно условие — запрет доступа
    return res.status(403).json({ message: 'Access Denied' });
  }
}