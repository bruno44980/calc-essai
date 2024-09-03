import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AnalysisCreateInput = {
  analysisType?: "Option1" | null;
  document?: DocumentWhereUniqueInput | null;
  result?: string | null;
};
