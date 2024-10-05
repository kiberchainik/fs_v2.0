import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {ConfigService} from '@nestjs/config'
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'
import IORedis from 'ioredis'
import * as session from 'express-session'
import msFn, { StringValue } from './libs/common/utils/ms.utils'
import RedisStore from 'connect-redis'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)
  const redis = new IORedis(config.getOrThrow('REDIS_URI'))

  app.use(cookieParser(config.getOrThrow('COOKIE_SECRET')))
  app.setGlobalPrefix('api')
  app.useGlobalPipes( //глобальный валидатор для валидации и трансформации данных
    new ValidationPipe({
      transform: true
    })
  )

  app.use(session({
    secret: config.getOrThrow<string>('SESSION_SECRET'),
    name: config.getOrThrow<string>('SESSION_NAME'),
    resave: true,
    saveUninitialized: false,
    cookie: {
      domain: config.getOrThrow<string>('SESSION_DOMAIN'),
      maxAge: msFn(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
      httpOnly: true, //config.getOrThrow<StringValue>('SESSION_HTTP_ONLY'),
      secure: false, //config.getOrThrow<StringValue>('SESSION_SECURE')
      sameSite: 'lax'
    },
    store: new RedisStore({
      client: redis,
      prefix: config.getOrThrow<StringValue>('SESSION_FOLDER')
    })
  }))

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie']
  })

  await app.listen(config.getOrThrow<number>('APP_PORT'))
}
bootstrap()