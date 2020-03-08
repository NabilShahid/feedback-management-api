import { AdminOperationsService } from "./admin-operations.service";
import { Controller, Post, Query, Body, Get } from "@nestjs/common";

@Controller("admin-operations")
export class AdminOperationsController {
  constructor(private adminOperationsService: AdminOperationsService) {}
  @Post("createEmployee")
  createEmployee(@Body() body:Employee): Promise<Array<Object>> {
    return this.adminOperationsService.createEmployee(
      body.UserName,
      body.DisplayName,
      body.EmployeeTypeId
    );
  }
  @Get("getEmployees")
  getEmployees(@Query() query): Promise<Array<Employee>> {
    return this.adminOperationsService.getEmployees(
      query.startIndex,
      query.pageSize,
      query.searchString,
      query.order
    );
  }
}
