import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { CommonMethodsService } from './shared-services/common-methods.service';
import { AdminOperationsModule } from './admin-operations/admin-operations.module';
import { ConfigModule } from './config/config.module';
import { SharedServicesModule } from './shared-services/shared-services.module';
import { UserOperationsModule } from './user-operations/user-operations.module';

@Module({
  imports: [AdminOperationsModule, SharedServicesModule, UserOperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
