import { Module } from '@nestjs/common';
import { FetchDomController } from './controller';
import { BrFetchService } from './service/br-fetch/br-fetch.service';

@Module({
  controllers: [FetchDomController],
  providers: [BrFetchService],
})
export class BionicRaeadingModule {}
