import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MapTitle } from "../map/MapTitle";

export const PointOfInterestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <ReferenceInput source="map.id" reference="Map" label="Map">
          <SelectInput optionText={MapTitle} />
        </ReferenceInput>
        <TextInput label="nom" source="nom" />
      </SimpleForm>
    </Create>
  );
};
