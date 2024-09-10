import { JsonValue } from "type-fest";
import { PointOfInterest } from "../pointOfInterest/PointOfInterest";
import { Route } from "../route/Route";

export type Map = {
  createdAt: Date;
  dateImportation: Date | null;
  description: string | null;
  fichier: JsonValue;
  id: string;
  nom: string | null;
  pointOfInterests?: Array<PointOfInterest>;
  routes?: Array<Route>;
  updatedAt: Date;
};
