import { Map as TMap } from "../api/map/Map";

export const MAP_TITLE_FIELD = "nom";

export const MapTitle = (record: TMap): string => {
  return record.nom?.toString() || String(record.id);
};
