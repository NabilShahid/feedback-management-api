import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataAccessService } from './data-access/data-access.service';
import { ConfigService } from './config/config.service';
import { CommonMethodsService } from './common-methods/common-methods.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataAccessService,  {
    provide: ConfigService,
    useValue: new ConfigService(
      `environments/${process.env.NODE_ENV || 'development'}.env`,
    ),
  }, CommonMethodsService],
})
export class AppModule {}
