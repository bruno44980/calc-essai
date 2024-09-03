import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiagrammeModuleBase } from "./base/diagramme.module.base";
import { DiagrammeService } from "./diagramme.service";
import { DiagrammeController } from "./diagramme.controller";
import { DiagrammeResolver } from "./diagramme.resolver";

@Module({
  imports: [DiagrammeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiagrammeController],
  providers: [DiagrammeService, DiagrammeResolver],
  exports: [DiagrammeService],
})
export class DiagrammeModule {}
