import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiagrammeResolverBase } from "./base/diagramme.resolver.base";
import { Diagramme } from "./base/Diagramme";
import { DiagrammeService } from "./diagramme.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Diagramme)
export class DiagrammeResolver extends DiagrammeResolverBase {
  constructor(
    protected readonly service: DiagrammeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
