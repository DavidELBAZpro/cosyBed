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

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    // private readonly fileUploadService: FileUploadService,
  ) {}

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id)
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts()
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadProductImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() productData: any,
  ) {
    await this.productsService.addProduct(productData, file)
  }
}
