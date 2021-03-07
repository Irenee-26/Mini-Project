import { Module } from '@nestjs/common';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';
import { BioDataModule } from './bio-data/bio-data.module';

@Module({
  imports: [LinkedIdentityModule, BioDataModule]
})
export class CitizenRegistrationModule {}
