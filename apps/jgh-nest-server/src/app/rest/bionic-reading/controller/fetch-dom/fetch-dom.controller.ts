import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrFetchService } from '../../service';

@Controller('bionic-reading')
export class FetchDomController {
  constructor(private readonly fetchService: BrFetchService) {}

  @Get()
  getHello(@Body() body: string) {
    console.log('body', body);
    return body;
    // return this.fetchService.fetchURLData();
  }

  @Post()
  getDomData(@Body() body: { url: string }) {
    const { url } = body;
    return this.fetchService.fetchURLData(url);
  }
}
