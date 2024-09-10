import { Module } from "@nestjs/common";
import { PointOfInterestModuleBase } from "./base/pointOfInterest.module.base";
import { PointOfInterestService } from "./pointOfInterest.service";
import { PointOfInterestController } from "./pointOfInterest.controller";
import { PointOfInterestResolver } from "./pointOfInterest.resolver";

@Module({
  imports: [PointOfInterestModuleBase],
  controllers: [PointOfInterestController],
  providers: [PointOfInterestService, PointOfInterestResolver],
  exports: [PointOfInterestService],
})
export class PointOfInterestModule {}
