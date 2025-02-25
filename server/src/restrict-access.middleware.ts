import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RestrictAccessMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const allowedSwaggerPaths = ['/swagger']
    const allowedApiPath = '/api'
    const allowedOrigin = this.configService.get<string>('ALLOWED_ORIGIN')

    if (allowedSwaggerPaths.some(path => req.path.startsWith(path))) {
      return next();
    }

    const origin = req.headers.origin || req.headers.referer
    const host = req.headers.host

    if (req.path.startsWith(allowedApiPath) && origin && origin.includes(allowedOrigin)) {
      return next()
    }

    if (host && (host.includes('localhost') || host.includes('127.0.0.1'))) {
      return next();
    }

    // Блокируем все остальные запросы
    return res.status(403).json({ message: 'Access Denied' });
  }
}