import { Controller, Get } from '@nestjs/common'

@Controller('welcome')
export class WelcomeController {
  @Get()
  getHello(): object {
    return { message: 'Hello Beau Gosse, tu vas bien ?' }
  }
}
