import { UserOperationsService } from './user-operations.service';
import { EmployeeSearchResult } from './../types/common-types';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('user-operations')
export class UserOperationsController {
    constructor(private userOperationsService:UserOperationsService){

    }
    @Get("searchEmployees")
    searchEmployees(@Query() query): Promise<Array<EmployeeSearchResult>> {
      return this.userOperationsService.searchEmployees(
        query.searchString
      );
    }
}
