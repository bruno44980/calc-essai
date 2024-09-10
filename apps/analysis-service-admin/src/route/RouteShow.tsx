import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MAP_TITLE_FIELD } from "../map/MapTitle";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
