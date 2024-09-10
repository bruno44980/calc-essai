import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RouteCreateInput = {
  distanceTotale?: number | null;
  map?: MapWhereUniqueInput | null;
  mode?: "Option1" | null;
  nom?: string | null;
  pointsOrdonnS?: InputJsonValue;
};
