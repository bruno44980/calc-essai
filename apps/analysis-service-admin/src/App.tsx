import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnalysisList } from "./analysis/AnalysisList";
import { AnalysisCreate } from "./analysis/AnalysisCreate";
import { AnalysisEdit } from "./analysis/AnalysisEdit";
import { AnalysisShow } from "./analysis/AnalysisShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PointOfInterestList } from "./pointOfInterest/PointOfInterestList";
import { PointOfInterestCreate } from "./pointOfInterest/PointOfInterestCreate";
import { PointOfInterestEdit } from "./pointOfInterest/PointOfInterestEdit";
import { PointOfInterestShow } from "./pointOfInterest/PointOfInterestShow";
import { MapList } from "./map/MapList";
import { MapCreate } from "./map/MapCreate";
import { MapEdit } from "./map/MapEdit";
import { MapShow } from "./map/MapShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnalysisService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Analysis"
          list={AnalysisList}
          edit={AnalysisEdit}
          create={AnalysisCreate}
          show={AnalysisShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PointOfInterest"
          list={PointOfInterestList}
          edit={PointOfInterestEdit}
          create={PointOfInterestCreate}
          show={PointOfInterestShow}
        />
        <Resource
          name="Map"
          list={MapList}
          edit={MapEdit}
          create={MapCreate}
          show={MapShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
