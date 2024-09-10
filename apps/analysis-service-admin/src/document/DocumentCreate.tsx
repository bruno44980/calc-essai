import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnalysisTitle } from "../analysis/AnalysisTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analyses"
          reference="Analysis"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisTitle} />
        </ReferenceArrayInput>
        <TextInput label="filePath" source="filePath" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
