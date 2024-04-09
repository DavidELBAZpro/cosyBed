import { Controller, Get } from '@nestjs/common'
import { Client } from './clients.model'

@Controller('clients')
export class ClientsController {
  @Get()
  getAllClients(): Promise<Client[]> {
    return
  }
}
