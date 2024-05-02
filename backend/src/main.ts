import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // Activer CORS
  app.enableCors()
  await app.listen(
    (process.env.NODE_ENV = 'production' ? '1605' : '1606'),
    '0.0.0.0',
  )
}
bootstrap()
