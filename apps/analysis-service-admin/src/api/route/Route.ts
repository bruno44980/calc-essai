import { Map } from "../map/Map";
import { JsonValue } from "type-fest";

export type Route = {
  createdAt: Date;
  distanceTotale: number | null;
  id: string;
  map?: Map | null;
  mode?: "Option1" | null;
  nom: string | null;
  pointsOrdonnS: JsonValue;
  updatedAt: Date;
};
