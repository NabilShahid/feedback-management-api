import { DataAccessService } from './data-access.service';
import { CommonMethodsService } from './common-methods.service';
import { Module } from '@nestjs/common';

@Module({
    providers:[
        CommonMethodsService,
        DataAccessService
    ],
    exports:[
        CommonMethodsService,
        DataAccessService
    ]
})
export class SharedServicesModule {}
