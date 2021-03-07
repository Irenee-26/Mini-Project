import { Module } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { BioDataController } from './bio-data.controller';

@Module({
  controllers: [BioDataController],
  providers: [BioDataService]
})
export class BioDataModule {}
