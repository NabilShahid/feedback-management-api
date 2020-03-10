import { USER_DB_FUNCTION_NAMES } from "./../constants/db-function-names";
import { DataAccessService } from "./../shared-services/data-access.service";
import { Injectable } from "@nestjs/common";
import SCHEMAS from "../constants/schemas";
import { DbResultObj } from "src/types/common-types";

@Injectable()
export class UserOperationsService {
  constructor(private dataAccessService: DataAccessService) {}
  async searchEmployees(searchString: string) {
    const getResult: any = await this.dataAccessService.executeDBFunction(
      USER_DB_FUNCTION_NAMES.SearchEmployees,
      {
        SearchString: searchString
      },
      SCHEMAS.UserFunctions
    );
    return getResult.rows;
  }
  async submitFeedback(
    performanceReviewId: string,
    employeeId: string,
    comments: string,
    ratingHardWork: number,
    ratingCommitment: number,
    ratingPunctuality: number,
    ratingTeamPlayer: number,
    ratingHonesty: number
  ):Promise<DbResultObj> {
    const putResult: any = await this.dataAccessService.executeDBFunction(
      USER_DB_FUNCTION_NAMES.SubmitFeedback,
      {
        PerformanceReviewId: performanceReviewId,
        EmployeeId: employeeId,
        Comments: comments,
        RatingHardWork: ratingHardWork,
        RatingCommitment: ratingCommitment,
        RatingPunctuality: ratingPunctuality,
        RatingTeamPlayer: ratingTeamPlayer,
        RatingHonesty: ratingHonesty
      },
      SCHEMAS.UserFunctions
    );
    return putResult.rows[0];
  }
}
