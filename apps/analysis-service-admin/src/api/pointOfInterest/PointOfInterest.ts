import { Map } from "../map/Map";

export type PointOfInterest = {
  createdAt: Date;
  description: string | null;
  id: string;
  latitude: number | null;
  longitude: number | null;
  map?: Map | null;
  nom: string | null;
  updatedAt: Date;
};
