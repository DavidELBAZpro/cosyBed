import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WelcomeController } from './welcome/welcome.controller';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ProductsModule, ClientsModule],
  controllers: [AppController, WelcomeController],
  providers: [AppService],
})
export class AppModule {}
