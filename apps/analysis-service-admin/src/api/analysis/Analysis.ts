import { Document } from "../document/Document";

export type Analysis = {
  analysisType?: "Option1" | null;
  createdAt: Date;
  document?: Document | null;
  id: string;
  result: string | null;
  updatedAt: Date;
};
