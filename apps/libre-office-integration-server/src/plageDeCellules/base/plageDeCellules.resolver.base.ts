/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlageDeCellules } from "./PlageDeCellules";
import { PlageDeCellulesCountArgs } from "./PlageDeCellulesCountArgs";
import { PlageDeCellulesFindManyArgs } from "./PlageDeCellulesFindManyArgs";
import { PlageDeCellulesFindUniqueArgs } from "./PlageDeCellulesFindUniqueArgs";
import { DeletePlageDeCellulesArgs } from "./DeletePlageDeCellulesArgs";
import { PlageDeCellulesService } from "../plageDeCellules.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlageDeCellules)
export class PlageDeCellulesResolverBase {
  constructor(
    protected readonly service: PlageDeCellulesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlageDeCellules",
    action: "read",
    possession: "any",
  })
  async _plageDeCellulesItemsMeta(
    @graphql.Args() args: PlageDeCellulesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlageDeCellules])
  @nestAccessControl.UseRoles({
    resource: "PlageDeCellules",
    action: "read",
    possession: "any",
  })
  async plageDeCellulesItems(
    @graphql.Args() args: PlageDeCellulesFindManyArgs
  ): Promise<PlageDeCellules[]> {
    return this.service.plageDeCellulesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlageDeCellules, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlageDeCellules",
    action: "read",
    possession: "own",
  })
  async plageDeCellules(
    @graphql.Args() args: PlageDeCellulesFindUniqueArgs
  ): Promise<PlageDeCellules | null> {
    const result = await this.service.plageDeCellules(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PlageDeCellules)
  @nestAccessControl.UseRoles({
    resource: "PlageDeCellules",
    action: "delete",
    possession: "any",
  })
  async deletePlageDeCellules(
    @graphql.Args() args: DeletePlageDeCellulesArgs
  ): Promise<PlageDeCellules | null> {
    try {
      return await this.service.deletePlageDeCellules(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
