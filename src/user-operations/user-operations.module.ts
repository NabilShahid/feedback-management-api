import { SharedServicesModule } from './../shared-services/shared-services.module';
import { Module } from '@nestjs/common';
import { UserOperationsController } from './user-operations.controller';
import { UserOperationsService } from './user-operations.service';

@Module({
  controllers: [UserOperationsController],
  providers: [UserOperationsService],
  imports:[SharedServicesModule]
})
export class UserOperationsModule {}
