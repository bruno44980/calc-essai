import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlageDeCellulesServiceBase } from "./base/plageDeCellules.service.base";

@Injectable()
export class PlageDeCellulesService extends PlageDeCellulesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
