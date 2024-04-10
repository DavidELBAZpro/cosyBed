import { SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Client } from './clients.model'

export type ClientDocument = Client & Document

class ClientClass {
  name: string
  email: string
  phoneNumber?: string
  products?: number[]
}

export const ClientSchema = SchemaFactory.createForClass(ClientClass).set(
  'collection',
  'clients',
)
