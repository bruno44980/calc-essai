import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnalysisWhereInput = {
  analysisType?: "Option1";
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  result?: StringNullableFilter;
};
