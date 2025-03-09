import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RestrictAccessMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowedSwaggerPaths = ['/developers'] // Swagger открыт всем
    const allowedOrigins = ['https://lavidea.it'] // Только твой фронт

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