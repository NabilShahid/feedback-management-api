import { SharedServicesModule } from './../shared-services/shared-services.module';
import { CommonMethodsService } from '../shared-services/common-methods.service';
import { Module } from '@nestjs/common';
import { AdminOperationsController } from './admin-operations.controller';
import { AdminOperationsService } from './admin-operations.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  controllers: [AdminOperationsController],
  imports:[ConfigModule,SharedServicesModule],
  providers: [AdminOperationsService]
})
export class AdminOperationsModule {}
