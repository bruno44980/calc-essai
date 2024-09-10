import { AnalysisCreateNestedManyWithoutDocumentsInput } from "./AnalysisCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  analyses?: AnalysisCreateNestedManyWithoutDocumentsInput;
  filePath?: string | null;
  name?: string | null;
};
