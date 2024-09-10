import * as graphql from "@nestjs/graphql";
import { MapResolverBase } from "./base/map.resolver.base";
import { Map } from "./base/Map";
import { MapService } from "./map.service";

@graphql.Resolver(() => Map)
export class MapResolver extends MapResolverBase {
  constructor(protected readonly service: MapService) {
    super(service);
  }
}
