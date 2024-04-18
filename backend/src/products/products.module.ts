import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from './products.schema'
import { FileUploadModule } from 'src/file-upload/file-upload.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    FileUploadModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
