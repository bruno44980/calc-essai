import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RouteWhereInput = {
  distanceTotale?: FloatNullableFilter;
  id?: StringFilter;
  map?: MapWhereUniqueInput;
  mode?: "Option1";
  nom?: StringNullableFilter;
  pointsOrdonnS?: JsonFilter;
};
