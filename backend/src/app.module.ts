import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WelcomeController } from './welcome/welcome.controller'
import { ProductsModule } from './products/products.module'
import { ClientsModule } from './clients/clients.module'
import { NomDuServiceService } from './nom-du-service/nom-du-service.service';
import { FileUploadService } from './file-upload/file-upload.service';

@Module({
  imports: [
    // Configuration TypeORM for PostgreSQL
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'votre_nom_utilisateur',
    //   password: 'votre_mot_de_passe',
    //   database: 'nom_de_votre_db',
    //   entities: [], // Vous devriez lister ici vos entités
    //   synchronize: true,
    // }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/db_ecommerce_app', {
      serverSelectionTimeoutMS: 5000, // Réduisez le temps d'attente pour le test
    }),
    ProductsModule,
    ClientsModule,
    // autres modules si nécessaire
  ],
  controllers: [AppController, WelcomeController],
  providers: [AppService, NomDuServiceService, FileUploadService],
})
export class AppModule {}
