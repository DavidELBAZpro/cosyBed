import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './products.model'
import { ProductSchema, ProductDocument } from './products.schema'
import { ObjectId } from 'mongodb'
import { FileUploadService } from 'src/file-upload/file-upload.service'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private productsModel: Model<ProductDocument>,
    private fileUploadService: FileUploadService,
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

  addProduct = async (
    productData: any,
    file: Express.Multer.File,
  ): Promise<any> => {
    console.log('productData received from frontend:', productData)
    console.log('Name:', productData.name)
    console.log('Description:', productData.description)
    console.log('Price:', productData.price)
    try {
      const imageUrl = await this.fileUploadService.uploadFile(
        file,
        'vue-nest-bucket',
      )
      if (!imageUrl) {
        throw new Error('Image upload failed')
      }
      console.log('Final data to be saved:', {
        ...productData,
        price: parseFloat(productData.price),
        imageUrl: imageUrl,
      })

      const newProduct = new this.productsModel({
        name: productData.name,
        description: productData.description,
        price: parseFloat(productData.price),
        imageUrl: imageUrl,
      })

      console.log('New Product posted (toObject):', newProduct.toObject())

      const result = await newProduct.save()
      console.log('Saved Product:', {
        id: result._id,
        name: result.name,
        description: result.description,
        price: result.price,
        imageUrl: result.imageUrl,
        versionKey: result.__v,
      })
      return result.toObject() as Product
    } catch (error) {
      console.error('Error saving the product:', error)
      throw new Error('Error processing your request')
    }
  }
}
