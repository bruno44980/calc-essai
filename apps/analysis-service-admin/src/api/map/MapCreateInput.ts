import { InputJsonValue } from "../../types";
import { PointOfInterestCreateNestedManyWithoutMapsInput } from "./PointOfInterestCreateNestedManyWithoutMapsInput";
import { RouteCreateNestedManyWithoutMapsInput } from "./RouteCreateNestedManyWithoutMapsInput";

export type MapCreateInput = {
  dateImportation?: Date | null;
  description?: string | null;
  fichier?: InputJsonValue;
  nom?: string | null;
  pointOfInterests?: PointOfInterestCreateNestedManyWithoutMapsInput;
  routes?: RouteCreateNestedManyWithoutMapsInput;
};
