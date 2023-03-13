import { Controller, Get } from '@nestjs/common';

@Controller('bionic-reading')
export class FetchDomController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
