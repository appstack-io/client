import { Global, Module } from '@nestjs/common';
import { ClientService } from './client.service';

@Global()
@Module({
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
