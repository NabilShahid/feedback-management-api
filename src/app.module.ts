import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { CommonMethodsService } from './shared-services/common-methods.service';
import { AdminOperationsModule } from './admin-operations/admin-operations.module';
import { ConfigModule } from './config/config.module';
import { SharedServicesModule } from './shared-services/shared-services.module';

@Module({
  imports: [AdminOperationsModule, SharedServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
