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

export const PointOfInterestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PointOfInterests"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
