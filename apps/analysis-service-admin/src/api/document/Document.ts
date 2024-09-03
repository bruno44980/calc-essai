import { Analysis } from "../analysis/Analysis";

export type Document = {
  analyses?: Array<Analysis>;
  createdAt: Date;
  filePath: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
