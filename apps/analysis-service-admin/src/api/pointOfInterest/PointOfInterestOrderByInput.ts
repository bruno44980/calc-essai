import { SortOrder } from "../../util/SortOrder";

export type PointOfInterestOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  mapId?: SortOrder;
  nom?: SortOrder;
  updatedAt?: SortOrder;
};
