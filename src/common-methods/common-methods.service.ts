import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonMethodsService {
  public getParamsString(params: object): string {
    return Object.keys(params)
      .reduce(
        (prev, curr, i) => prev + '"' + curr + '"' + ":=$" + (i + 1) + ",",
        ""
      )
      .slice(0, -1);
  }
}
