import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapService } from "./map.service";
import { MapControllerBase } from "./base/map.controller.base";

@swagger.ApiTags("maps")
@common.Controller("maps")
export class MapController extends MapControllerBase {
  constructor(protected readonly service: MapService) {
    super(service);
  }
}
