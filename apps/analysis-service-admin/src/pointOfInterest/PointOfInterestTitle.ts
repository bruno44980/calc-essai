import { PointOfInterest as TPointOfInterest } from "../api/pointOfInterest/PointOfInterest";

export const POINTOFINTEREST_TITLE_FIELD = "nom";

export const PointOfInterestTitle = (record: TPointOfInterest): string => {
  return record.nom?.toString() || String(record.id);
};
