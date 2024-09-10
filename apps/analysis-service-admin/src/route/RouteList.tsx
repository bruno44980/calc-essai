import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MAP_TITLE_FIELD } from "../map/MapTitle";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Routes"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
