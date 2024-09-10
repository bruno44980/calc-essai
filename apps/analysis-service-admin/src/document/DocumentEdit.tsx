import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnalysisTitle } from "../analysis/AnalysisTitle";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
