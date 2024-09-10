import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MapTitle } from "../map/MapTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="distanceTotale" source="distanceTotale" />
        <ReferenceInput source="map.id" reference="Map" label="Map">
          <SelectInput optionText={MapTitle} />
        </ReferenceInput>
        <SelectInput
          source="mode"
          label="mode"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="nom" source="nom" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
