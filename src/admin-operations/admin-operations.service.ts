import SCHEMAS from './../constants/schemas';
import { DataAccessService } from './../shared-services/data-access.service';
import { ADMIN_DB_FUNCTION_NAMES } from './../constants/db-function-names';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminOperationsService {
    constructor(private dataAccessService:DataAccessService){}
    async createEmployee(
        userName: string,
        displayName:string,
        employeeTypeId:number
      ): Promise<any> {
        const createResult: any = await this.dataAccessService.executeDBFunction(
          ADMIN_DB_FUNCTION_NAMES.get("CreateEmployee"),
          {
            UserName: userName,
            DisplayName: displayName,
            EmployeeTypeId: employeeTypeId,
          },
          SCHEMAS.AdminFunctions
        );
    
        return createResult.rows;
      }
}
