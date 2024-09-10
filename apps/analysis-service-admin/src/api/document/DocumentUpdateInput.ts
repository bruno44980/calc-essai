import { AnalysisUpdateManyWithoutDocumentsInput } from "./AnalysisUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  analyses?: AnalysisUpdateManyWithoutDocumentsInput;
  filePath?: string | null;
  name?: string | null;
};
