import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataAccessService } from './data-access/data-access.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataAccessService],
})
export class AppModule {}
