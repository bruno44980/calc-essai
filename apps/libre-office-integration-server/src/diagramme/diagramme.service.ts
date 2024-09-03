import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiagrammeServiceBase } from "./base/diagramme.service.base";

@Injectable()
export class DiagrammeService extends DiagrammeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
