import { Employee, EmployeeWithCount, DbResultObj } from './../types/common-types';
import { AdminOperationsService } from "./admin-operations.service";
import { Controller, Post, Query, Body, Get, Put } from "@nestjs/common";

@Controller("admin-operations")
export class AdminOperationsController {
  constructor(private adminOperationsService: AdminOperationsService) {}
  @Post("createEmployee")
  createEmployee(@Body() body:Employee): Promise<Array<Object>> {
    return this.adminOperationsService.createEmployee(
      body.UserName,
      body.DisplayName,
      body.PhoneNumber,
      body.Password
    );
  }
  @Get("getEmployees")
  getEmployees(@Query() query): Promise<EmployeeWithCount> {
    return this.adminOperationsService.getEmployees(
      query.startIndex,
      query.pageSize,
      query.searchString,
      query.order
    );
  }
  @Post("createPerformanceReview")
  createPerformanceReview(@Body() body): Promise<DbResultObj> {
    return this.adminOperationsService.createPerformanceReview(
      body.EmployeeId,
      body.Assignees
    );
  }
  @Put("manageReviewAssignees")
  manageReviewAssignees(@Body() body): Promise<DbResultObj> {
    return this.adminOperationsService.manageReviewAssignees(
      body.performaceReviewId,
      body.assigneesToAdd,
      body.assigneesToRemove
    );
  }
}
