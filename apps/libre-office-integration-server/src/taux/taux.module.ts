import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TauxModuleBase } from "./base/taux.module.base";
import { TauxService } from "./taux.service";
import { TauxController } from "./taux.controller";
import { TauxResolver } from "./taux.resolver";

@Module({
  imports: [TauxModuleBase, forwardRef(() => AuthModule)],
  controllers: [TauxController],
  providers: [TauxService, TauxResolver],
  exports: [TauxService],
})
export class TauxModule {}
