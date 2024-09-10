import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointOfInterestService } from "./pointOfInterest.service";
import { PointOfInterestControllerBase } from "./base/pointOfInterest.controller.base";

@swagger.ApiTags("pointOfInterests")
@common.Controller("pointOfInterests")
export class PointOfInterestController extends PointOfInterestControllerBase {
  constructor(protected readonly service: PointOfInterestService) {
    super(service);
  }
}
