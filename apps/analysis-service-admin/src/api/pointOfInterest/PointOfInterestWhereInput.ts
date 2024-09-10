import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MapWhereUniqueInput } from "../map/MapWhereUniqueInput";

export type PointOfInterestWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  map?: MapWhereUniqueInput;
  nom?: StringNullableFilter;
};
