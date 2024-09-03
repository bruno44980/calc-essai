import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlageDeCellulesService } from "./plageDeCellules.service";
import { PlageDeCellulesControllerBase } from "./base/plageDeCellules.controller.base";

@swagger.ApiTags("plageDeCellules")
@common.Controller("plageDeCellules")
export class PlageDeCellulesController extends PlageDeCellulesControllerBase {
  constructor(
    protected readonly service: PlageDeCellulesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
