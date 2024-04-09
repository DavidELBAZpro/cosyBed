import { Product } from 'src/products/products.model'

export interface Client {
  id: number
  name: string
  email: string
  phoneNumber?: string
  products?: Product[]
}
