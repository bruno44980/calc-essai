import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlageDeCellulesModuleBase } from "./base/plageDeCellules.module.base";
import { PlageDeCellulesService } from "./plageDeCellules.service";
import { PlageDeCellulesController } from "./plageDeCellules.controller";
import { PlageDeCellulesResolver } from "./plageDeCellules.resolver";

@Module({
  imports: [PlageDeCellulesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlageDeCellulesController],
  providers: [PlageDeCellulesService, PlageDeCellulesResolver],
  exports: [PlageDeCellulesService],
})
export class PlageDeCellulesModule {}
