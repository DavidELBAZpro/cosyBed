import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common'
import { ClientsService } from './clients.service'
import { Client } from './clients.model'

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get()
  getAllClients(): Promise<Client[]> {
    return this.clientService.getAllClients()
  }

  @Get('search')
  async getClientByNameOrEmail(@Query('info') str: string): Promise<Client[]> {
    if (!str) {
      throw new NotFoundException('Search string is required')
    }
    const client = await this.clientService.getClientsByNameOrEmail(str)
    if (!client) {
      throw new NotFoundException(
        `Client with name or email '${str}' not found`,
      )
    }
    return client
  }

  @Get(':id')
  getClientById(@Param('id') id: string): Promise<Client> {
    return this.clientService.getClientById(id)
  }
}
