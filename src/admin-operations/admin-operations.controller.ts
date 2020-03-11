import {
  Employee,
  EmployeeWithCount,
  DbResultObj,
  PerformanceReview
} from "./../types/common-types";
import { AdminOperationsService } from "./admin-operations.service";
import { Controller, Post, Query, Body, Get, Put, Delete } from "@nestjs/common";

@Controller("admin-operations")
export class AdminOperationsController {
  constructor(private adminOperationsService: AdminOperationsService) {}
  @Post("createEmployee")
  createEmployee(@Body() body: Employee): Promise<Array<Object>> {
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
  @Get("getAllPerformanceReviews")
  getAllPerformanceReviews(): Promise<Array<PerformanceReview>> {
    return this.adminOperationsService.getAllPerformanceReviews();
  }
  @Get("GetSubmittedReviews")
  GetSubmittedReviews(@Query() query): Promise<Array<PerformanceReview>> {
    return this.adminOperationsService.getSubmittedReviews(query.performanceReviewId);
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
      body.PerformanceReviewId,
      body.AssigneesToAdd,
      body.AssigneesToRemove
    );
  }
  @Put("updateEmployee")
  updateEmployee(@Query() query,@Body() body): Promise<Object> {
    return this.adminOperationsService.updateEmployee(
      query.employeeId,
      body.DisplayName,
      body.PhoneNumber
    );
  }
  @Delete("deleteEmployee")
  deleteEmployee(@Query() query): Promise<Object> {
    return this.adminOperationsService.deleteEmployee(
      query.employeeId
    );
  }
}
