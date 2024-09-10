import { AnalysisListRelationFilter } from "../analysis/AnalysisListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  analyses?: AnalysisListRelationFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
