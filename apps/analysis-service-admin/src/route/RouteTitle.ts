import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "nom";

export const RouteTitle = (record: TRoute): string => {
  return record.nom?.toString() || String(record.id);
};
