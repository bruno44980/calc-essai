import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TauxServiceBase } from "./base/taux.service.base";

@Injectable()
export class TauxService extends TauxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
