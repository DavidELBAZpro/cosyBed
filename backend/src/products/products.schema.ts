import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({
  collection: 'products',
  versionKey: false,
})
class ProductClass {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  price: number

  @Prop({ required: true })
  imageUrl: string
}

export type ProductDocument = ProductClass & Document

export const ProductSchema = SchemaFactory.createForClass(ProductClass)
