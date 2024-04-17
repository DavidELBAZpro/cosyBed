import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './products.model'
import { ProductSchema, ProductDocument } from './products.schema'
import { ObjectId } from 'mongodb'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productsModel: Model<ProductDocument>,
  ) {}

  getAllProducts = async (): Promise<Product[]> => {
    const products: ProductDocument[] = await this.productsModel.find().exec()
    console.log('products', products)

    return products.map((product) => product.toObject() as Product)
  }

  getProductById = async (id: string): Promise<Product> => {
    const objectId = new ObjectId(id)
    const product: Product = await this.productsModel.findOne({ _id: objectId })
    if (!product)
      throw new NotFoundException(`Product with ID: ${objectId} not found`)
    return product
  }
}
