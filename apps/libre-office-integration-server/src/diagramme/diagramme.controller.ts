import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiagrammeService } from "./diagramme.service";
import { DiagrammeControllerBase } from "./base/diagramme.controller.base";

@swagger.ApiTags("diagrammes")
@common.Controller("diagrammes")
export class DiagrammeController extends DiagrammeControllerBase {
  constructor(
    protected readonly service: DiagrammeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
