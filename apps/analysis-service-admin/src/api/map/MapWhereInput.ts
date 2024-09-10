import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PointOfInterestListRelationFilter } from "../pointOfInterest/PointOfInterestListRelationFilter";
import { RouteListRelationFilter } from "../route/RouteListRelationFilter";

export type MapWhereInput = {
  dateImportation?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  fichier?: JsonFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  pointOfInterests?: PointOfInterestListRelationFilter;
  routes?: RouteListRelationFilter;
};
