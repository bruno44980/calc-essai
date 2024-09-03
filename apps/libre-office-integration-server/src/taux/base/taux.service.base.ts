/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Taux as PrismaTaux } from "@prisma/client";

export class TauxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TauxCountArgs, "select">): Promise<number> {
    return this.prisma.taux.count(args);
  }

  async tauxes(args: Prisma.TauxFindManyArgs): Promise<PrismaTaux[]> {
    return this.prisma.taux.findMany(args);
  }
  async taux(args: Prisma.TauxFindUniqueArgs): Promise<PrismaTaux | null> {
    return this.prisma.taux.findUnique(args);
  }
  async createTaux(args: Prisma.TauxCreateArgs): Promise<PrismaTaux> {
    return this.prisma.taux.create(args);
  }
  async updateTaux(args: Prisma.TauxUpdateArgs): Promise<PrismaTaux> {
    return this.prisma.taux.update(args);
  }
  async deleteTaux(args: Prisma.TauxDeleteArgs): Promise<PrismaTaux> {
    return this.prisma.taux.delete(args);
  }
}
