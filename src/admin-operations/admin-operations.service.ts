import SCHEMAS from "./../constants/schemas";
import { DataAccessService } from "./../shared-services/data-access.service";
import { ADMIN_DB_FUNCTION_NAMES } from "./../constants/db-function-names";
import  EMPLOYEE_TYPES from "./../constants/employee-types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminOperationsService {
  constructor(private dataAccessService: DataAccessService) {}
  async createEmployee(
    userName: string,
    displayName: string,
    employeeTypeId: number
  ): Promise<Array<Object>> {
    const createResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.CreateEmployee,
      {
        UserName: userName,
        DisplayName: displayName,
        EmployeeTypeId: employeeTypeId
      },
      SCHEMAS.AdminFunctions
    );

    return createResult.rows&&createResult.rows[0];
  }
  async getEmployees(
    startIndex: number,
    pageSize: number,
    searchString: string,
    order:string

  ): Promise<Array<Employee>> {
    const getResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.GetEmployees,
      {
        StartIndex: startIndex,
        PageSize: pageSize,
        SearchString:searchString,
        Order:order,
        EmployeeTypeId: EMPLOYEE_TYPES.Normal
      },
      SCHEMAS.AdminFunctions
    );

    return getResult.rows;
  }
}
