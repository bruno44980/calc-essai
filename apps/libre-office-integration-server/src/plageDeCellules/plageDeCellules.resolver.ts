import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlageDeCellulesResolverBase } from "./base/plageDeCellules.resolver.base";
import { PlageDeCellules } from "./base/PlageDeCellules";
import { PlageDeCellulesService } from "./plageDeCellules.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlageDeCellules)
export class PlageDeCellulesResolver extends PlageDeCellulesResolverBase {
  constructor(
    protected readonly service: PlageDeCellulesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
