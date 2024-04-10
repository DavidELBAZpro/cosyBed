import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './products.model'
import { ProductSchema, ProductDocument } from './products.schema'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productsModel: Model<ProductDocument>,
  ) {}

  getAllProducts = async (): Promise<Product[]> => {
    const products = await this.productsModel.find().exec()
    console.log('products', products)

    return products.map((product) => product.toObject() as Product)
  }
}
