import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PointOfInterestTitle } from "../pointOfInterest/PointOfInterestTitle";
import { RouteTitle } from "../route/RouteTitle";

export const MapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateImportation" source="dateImportation" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="nom" source="nom" />
        <ReferenceArrayInput
          source="pointOfInterests"
          reference="PointOfInterest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PointOfInterestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="routes"
          reference="Route"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RouteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
