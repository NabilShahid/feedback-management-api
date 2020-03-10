import { EmployeeWithCount, DbResultObj } from "./../types/common-types";
import SCHEMAS from "./../constants/schemas";
import { DataAccessService } from "./../shared-services/data-access.service";
import { ADMIN_DB_FUNCTION_NAMES } from "./../constants/db-function-names";
import EMPLOYEE_TYPES from "./../constants/employee-types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminOperationsService {
  constructor(private dataAccessService: DataAccessService) {}
  async createEmployee(
    userName: string,
    displayName: string,
    phoneNumber: string,
    password
  ): Promise<Array<Object>> {
    const createResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.CreateEmployee,
      {
        UserName: userName,
        DisplayName: displayName,
        PhoneNumber: phoneNumber,
        Password: password,
        EmployeeTypeId: EMPLOYEE_TYPES.Normal
      },
      SCHEMAS.AdminFunctions
    );

    return createResult.rows && createResult.rows[0];
  }
  async getEmployees(
    startIndex: number,
    pageSize: number,
    searchString: string,
    order: string
  ): Promise<EmployeeWithCount> {
    const getResult: any = await Promise.all([
      this.dataAccessService.executeDBFunction(
        ADMIN_DB_FUNCTION_NAMES.GetEmployees,
        {
          StartIndex: startIndex,
          PageSize: pageSize,
          SearchString: searchString,
          Order: order,
          EmployeeTypeId: EMPLOYEE_TYPES.Normal
        },
        SCHEMAS.AdminFunctions
      ),
      this.getEmployeesCount(EMPLOYEE_TYPES.Normal)
    ]);
    return {
      EmployeeData: getResult[0].rows,
      Count: getResult[1]
    };
  }
  async getEmployeesCount(employeeTypeId: number) {
    const getResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.GetEmployeesCount,
      {
        EmployeeTypeId: employeeTypeId
      },
      SCHEMAS.AdminFunctions
    );
    return getResult.rows[0].EmployeeCount;
  }
  async createPerformanceReview(employeeId: string, assignees: Array<string>):Promise<DbResultObj> {
    const getResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.CreatePerformanceReview,
      {
        EmployeeId: employeeId,
        Assignees: JSON.stringify(assignees)
      },
      SCHEMAS.AdminFunctions
    );
    return getResult.rows[0];
  }
  async manageReviewAssignees(performanceReviewId: string, assigneesToAdd: Array<string>, assigneesToRemove: Array<string>):Promise<DbResultObj> {
    const getResult: any = await this.dataAccessService.executeDBFunction(
      ADMIN_DB_FUNCTION_NAMES.ManageReviewAssignees,
      {
        PerformanceReviewId: performanceReviewId,
        AssigneesToAdd: JSON.stringify(assigneesToAdd),
        AssigneesToRemove: JSON.stringify(assigneesToRemove),
      },
      SCHEMAS.AdminFunctions
    );
    return getResult.rows[0];
  }
}
