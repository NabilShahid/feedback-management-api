import { USER_DB_FUNCTION_NAMES } from './../constants/db-function-names';
import { DataAccessService } from './../shared-services/data-access.service';
import { Injectable } from '@nestjs/common';
import SCHEMAS from "../constants/schemas"

@Injectable()
export class UserOperationsService {
    constructor(private dataAccessService:DataAccessService){

    }
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
}
