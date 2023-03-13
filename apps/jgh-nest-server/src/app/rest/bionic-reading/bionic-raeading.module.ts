import { Module } from '@nestjs/common';
import { FetchDomController } from './controller';

@Module({
  controllers: [FetchDomController],
})
export class BionicRaeadingModule {}
