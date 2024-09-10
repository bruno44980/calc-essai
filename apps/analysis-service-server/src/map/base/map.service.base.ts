/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Map as PrismaMap,
  PointOfInterest as PrismaPointOfInterest,
  Route as PrismaRoute,
} from "@prisma/client";

import { MapCreateInput } from "./MapCreateInput";
import { Map } from "./Map";

export class MapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MapCountArgs, "select">): Promise<number> {
    return this.prisma.map.count(args);
  }

  async maps(args: Prisma.MapFindManyArgs): Promise<PrismaMap[]> {
    return this.prisma.map.findMany(args);
  }
  async map(args: Prisma.MapFindUniqueArgs): Promise<PrismaMap | null> {
    return this.prisma.map.findUnique(args);
  }
  async createMap(args: Prisma.MapCreateArgs): Promise<PrismaMap> {
    return this.prisma.map.create(args);
  }
  async updateMap(args: Prisma.MapUpdateArgs): Promise<PrismaMap> {
    return this.prisma.map.update(args);
  }
  async deleteMap(args: Prisma.MapDeleteArgs): Promise<PrismaMap> {
    return this.prisma.map.delete(args);
  }

  async findPointOfInterests(
    parentId: string,
    args: Prisma.PointOfInterestFindManyArgs
  ): Promise<PrismaPointOfInterest[]> {
    return this.prisma.map
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pointOfInterests(args);
  }

  async findRoutes(
    parentId: string,
    args: Prisma.RouteFindManyArgs
  ): Promise<PrismaRoute[]> {
    return this.prisma.map
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .routes(args);
  }
  async ImportMap(args: MapCreateInput): Promise<Map> {
    throw new Error("Not implemented");
  }
}
