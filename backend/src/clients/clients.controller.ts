import { Controller, Get } from '@nestjs/common'

@Controller('clients')
export class ClientsController {
  @Get()
  getAllClients(): Promise<Client[]> {
    return
  }
}
