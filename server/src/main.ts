import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'
import IORedis from 'ioredis'
import * as session from 'express-session'
import msFn, { StringValue } from './libs/common/utils/ms.utils'
import RedisStore from 'connect-redis'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { RestrictAccessMiddleware } from './restrict-access.middleware'

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
      httpOnly: config.getOrThrow<boolean>('SESSION_HTTP_ONLY'),
      secure: config.getOrThrow<boolean>('SESSION_SECURE'),
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

  const configSwagger = new DocumentBuilder()
    .setTitle('Lavoro Ideale REST API')
    .setDescription('Documentazione dell\'API REST di LavIdea. Questa API permette alle agenzie di lavoro di connettersi al nostro sito per pubblicare le loro offerte di lavoro, scaricare i curriculum vitae degli utenti registrati e ricevere analisi dettagliate sulle loro offerte di lavoro. Utilizzando gli endpoint forniti, le agenzie possono gestire facilmente le loro risorse e ottimizzare il processo di reclutamento. Assicuratevi di seguire le linee guida per un utilizzo efficace e sicuro dell\'API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        in: 'Header',
        name: 'Authorization',
      },
      'JWT-auth',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(process.env.APP_PORT || 3000, '0.0.0.0')
}
bootstrap()