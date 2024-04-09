import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // try {
  //   // Connexion à MongoDB
  //   MongooseModule.forRoot('mongodb://localhost:27017/db_ecommerce_app')
  //   Logger.log('Connecté à MongoDB avec succès', 'MongoDB')
  // } catch (err) {
  //   Logger.error(`Erreur de connexion à MongoDB: ${err}`, '', 'MongoDB')
  //   throw err
  // }
  // Activer CORS
  app.enableCors()
  await app.listen(1605)
}
bootstrap()
