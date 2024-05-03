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
    process.env.NODE_ENV === 'production' ? process.env.PORT : '1606',
    '0.0.0.0',
  )
  Logger.log(`Server is running on port ${process.env.PORT}`)
  Logger.log(`mongo: ${process.env.MONGO_URL}`)
  Logger.log(`node_env: ${process.env.NODE_ENV}`)
  Logger.log(`this is a test2`)
}
bootstrap()
