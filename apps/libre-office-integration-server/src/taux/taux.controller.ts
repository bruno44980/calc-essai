import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TauxService } from "./taux.service";
import { TauxControllerBase } from "./base/taux.controller.base";

@swagger.ApiTags("tauxes")
@common.Controller("tauxes")
export class TauxController extends TauxControllerBase {
  constructor(
    protected readonly service: TauxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
