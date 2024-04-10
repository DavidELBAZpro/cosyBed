import { SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Product } from './products.model'

export type ProductDocument = Product & Document

class ProductClass {
  name: string
  description: string
  price: number
}

export const ProductSchema = SchemaFactory.createForClass(ProductClass).set(
  'collection',
  'products',
)
