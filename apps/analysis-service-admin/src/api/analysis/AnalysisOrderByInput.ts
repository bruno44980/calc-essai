import { SortOrder } from "../../util/SortOrder";

export type AnalysisOrderByInput = {
  analysisType?: SortOrder;
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
