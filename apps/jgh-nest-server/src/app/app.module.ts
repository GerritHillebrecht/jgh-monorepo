import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BionicRaeadingModule } from './rest/bionic-reading/bionic-raeading.module';

@Module({
  imports: [BionicRaeadingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
