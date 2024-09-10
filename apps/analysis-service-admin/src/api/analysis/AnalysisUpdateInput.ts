import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AnalysisUpdateInput = {
  analysisType?: "Option1" | null;
  document?: DocumentWhereUniqueInput | null;
  result?: string | null;
};
