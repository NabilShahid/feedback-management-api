import { Employee, ClientSessionObject } from "./types/common-types";
import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('app-operations')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("login")
  login(@Query() query): Promise<ClientSessionObject | boolean> {
    return this.appService.login(query.userName, query.password);
  }
}
