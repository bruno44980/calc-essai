import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MAP_TITLE_FIELD } from "./MapTitle";

export const MapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateImportation" source="dateImportation" />
        <TextField label="description" source="description" />
        <TextField label="fichier" source="fichier" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PointOfInterest"
          target="mapId"
          label="PointOfInterests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="latitude" source="latitude" />
            <TextField label="longitude" source="longitude" />
            <ReferenceField label="Map" source="map.id" reference="Map">
              <TextField source={MAP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="nom" source="nom" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Route" target="mapId" label="Routes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="distanceTotale" source="distanceTotale" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Map" source="map.id" reference="Map">
              <TextField source={MAP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="mode" source="mode" />
            <TextField label="nom" source="nom" />
            <TextField label="pointsOrdonnés" source="pointsOrdonnS" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
