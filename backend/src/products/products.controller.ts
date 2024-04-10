import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { Product } from './products.model'

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllClients(): Promise<Product[]> {
    return this.productService.getAllProducts()
  }
}
