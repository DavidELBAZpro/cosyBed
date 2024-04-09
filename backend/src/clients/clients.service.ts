import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Client } from './clients.model'
import { ClientSchema, ClientDocument } from './clients.schema'

@Injectable()
export class ClientsService {
  // constructor(
  //   @InjectModel('Client')
  //   private readonly clientsModel: Model<ClientDocument>,
  // ) {}
  // getClientById = async (id: number): Promise<Client | null> => {
  //   const client: Client | null = await this.clientsModel.findById(id).exec()
  //   if (!client) {
  //     return null
  //   }
  //   return client
  // }
  // getClientByNameOrEmail = async (str: string): Promise<Client | null> => {
  //   let client: Client | null = null
  //   if (str.includes('@')) {
  //     // Recherche par email
  //     client = await this.clientsModel.findOne({ email: str }).exec()
  //   } else {
  //     // Recherche par nom
  //     client = await this.clientsModel.findOne({ name: str }).exec()
  //   }
  //   return client
  // }
}
