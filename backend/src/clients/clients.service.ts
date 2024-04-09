import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Client } from './clients.model'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Clients') private readonly clientsModel: Model<Client>,
  ) {}

  getClientById = async (id: number): Promise<Client | null> => {
    const client: Client | null = await this.clientsModel.findById(id).exec()
    if (!client) {
      return null
    }
    return client
  }

  getClientByNameOrEmail = async (str: string): Promise<Client | null> => {
    let client: Client | null = null
    if (str.includes('@')) {
      // Recherche par email
      client = await this.clientsModel.findOne({ email: str }).exec()
    } else {
      // Recherche par nom
      client = await this.clientsModel.findOne({ name: str }).exec()
    }
    return client
  }
}
