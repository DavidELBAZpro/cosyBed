import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ProductsService } from './products.service'
import { Product } from './products.model'
// import { FileUploadService } from 'src/file-upload/file-upload.service'
import { ObjectId } from 'mongodb'

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productService: ProductsService,
    // private readonly fileUploadService: FileUploadService,
  ) {}

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id)
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts()
  }

  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     useFactory: (service: FileUploadService) => service.multerStorageConfig,
  //     inject: [FileUploadService],
  //   }),
  // )
  // async addProduct(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() productData: { name: string; description: string; price: number },
  // ) {
  //   const imageUrl = file.location // URL de l'image stockée sur S3
  //   const product = await this.fileUploadService.addProduct({
  //     ...productData,
  //     imageUrl,
  //   })

  //   return product
  // }
}
