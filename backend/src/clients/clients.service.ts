import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Client } from './clients.model'
import { ClientSchema, ClientDocument } from './clients.schema'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client')
    private readonly clientsModel: Model<ClientDocument>,
  ) {}

  getAllClients = async (): Promise<Client[]> => {
    const clients = await this.clientsModel.find().exec()
    return clients.map((client) => client.toObject() as Client)
  }
  getClientById = async (id: string): Promise<Client | null> => {
    const client: Client | null = await this.clientsModel.findById(id).exec()
    return client
  }

  async getClientsByNameOrEmail(str: string): Promise<Client[]> {
    // Création d'une expression régulière pour une recherche "contient" insensible à la casse
    const searchRegex = new RegExp(str, 'i')
    console.log('searchRegex', searchRegex)

    const clients = await this.clientsModel
      .find({
        $or: [
          { name: { $regex: searchRegex } },
          { email: { $regex: searchRegex } },
        ],
      })
      .exec()
    return clients
  }
}
