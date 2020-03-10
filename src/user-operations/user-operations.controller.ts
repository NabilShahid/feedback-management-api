import { UserOperationsService } from './user-operations.service';
import { EmployeeSearchResult, DbResultObj } from './../types/common-types';
import { Controller, Get, Query, Put, Body } from '@nestjs/common';

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
    @Put("submitFeedback")
    submitFeedback(@Body() body): Promise<DbResultObj> {
      return this.userOperationsService.submitFeedback(
        body.PerformanceReviewId,
        body.EmployeeId,
        body.Comments,
        body.RatingHardWork,
        body.RatingCommitment,
        body.RatingPunctuality,
        body.RatingTeamPlayer,
        body.RatingHonesty,
      );
    }
}
