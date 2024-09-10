import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";

export type PointOfInterestCreateInput = {
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  map?: MapWhereUniqueInput | null;
  nom?: string | null;
};
