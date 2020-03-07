import { AdminOperationsService } from "./admin-operations.service";
import { Controller, Post, Query, Body } from "@nestjs/common";

@Controller("admin-operations")
export class AdminOperationsController {
  constructor(private adminOperationsService: AdminOperationsService) {}
  @Post("createEmployee")
  createEmployee(@Body() body): Promise<string> {
    return this.adminOperationsService.createEmployee(
      body.UserName,
      body.DisplayName,
      body.EmployeeTypeId
    );
  }
}
