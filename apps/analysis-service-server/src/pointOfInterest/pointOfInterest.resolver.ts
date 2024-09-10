import * as graphql from "@nestjs/graphql";
import { PointOfInterestResolverBase } from "./base/pointOfInterest.resolver.base";
import { PointOfInterest } from "./base/PointOfInterest";
import { PointOfInterestService } from "./pointOfInterest.service";

@graphql.Resolver(() => PointOfInterest)
export class PointOfInterestResolver extends PointOfInterestResolverBase {
  constructor(protected readonly service: PointOfInterestService) {
    super(service);
  }
}
