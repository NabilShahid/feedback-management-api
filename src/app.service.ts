import { Injectable } from "@nestjs/common";
import { Employee, ClientSessionObject } from "./types/common-types";
import { DataAccessService } from "./shared-services/data-access.service";
import SCHEMAS from "./constants/schemas";
import { PUBLIC_DB_FUNCTION_NAMES } from "./constants/db-function-names";
import EMPLOYEE_TYPES from "./constants/employee-types";

@Injectable()
export class AppService {
  constructor(private dataAccessService: DataAccessService) {}
  getHello(): string {
    return "Hello World!";
  }
  async login(
    userName: string,
    password: string
  ): Promise<ClientSessionObject | boolean> {
    const loginResult: any = await this.dataAccessService.executeDBFunction(
      PUBLIC_DB_FUNCTION_NAMES.Login,
      {
        UserName: userName,
        Password: password
      }
    );

    if (!loginResult.rows[0]) {
      return false;
    }
    const employeeResult: any = await this.dataAccessService.executeDBFunction(
      PUBLIC_DB_FUNCTION_NAMES.GetEmployeeInfo,
      {
        EmployeeId: loginResult.rows[0].EmployeeId
      }
    );
    return {
      EmployeeId: loginResult.rows[0].EmployeeId,
      DisplayName:employeeResult.rows[0]&&employeeResult.rows[0].DisplayName,
      IsAdmin:
        employeeResult.rows[0] &&
        loginResult.rows[0].EmployeeTypeId === EMPLOYEE_TYPES.Admin
    };
  }
}
