import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RestrictAccessMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const allowedSwaggerPaths = ['/swagger'];
    const allowedApiPath = '/api'; // Разрешённый путь для API
    const allowedOrigin = this.configService.get<string>('ALLOWED_ORIGIN'); // Домен фронта

    // Разрешаем доступ к Swagger
    if (allowedSwaggerPaths.some(path => req.path.startsWith(path))) {
      return next();
    }

    // Разрешаем запросы к API только с разрешённого домена
    const origin = req.headers.origin || req.headers.referer;

    if (req.path.startsWith(allowedApiPath) && origin && origin.includes(allowedOrigin)) {
      return next();
    }

    // Блокируем все остальные запросы
    return res.status(403).json({ message: 'Access Denied' });
  }
}