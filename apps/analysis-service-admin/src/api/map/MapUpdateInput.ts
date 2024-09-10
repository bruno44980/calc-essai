import { InputJsonValue } from "../../types";
import { PointOfInterestUpdateManyWithoutMapsInput } from "./PointOfInterestUpdateManyWithoutMapsInput";
import { RouteUpdateManyWithoutMapsInput } from "./RouteUpdateManyWithoutMapsInput";

export type MapUpdateInput = {
  dateImportation?: Date | null;
  description?: string | null;
  fichier?: InputJsonValue;
  nom?: string | null;
  pointOfInterests?: PointOfInterestUpdateManyWithoutMapsInput;
  routes?: RouteUpdateManyWithoutMapsInput;
};
