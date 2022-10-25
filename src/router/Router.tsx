import React, { ReactComponentElement } from "react";
import { Route, RouterProps, Routes } from "react-router-dom";
import { routes } from "./routes";

export default class Router extends React.PureComponent<{}>{
  render() {

    return (
      <Routes>
        {routes.map((route) => (
          <Route {...route}></Route>
        ))}
      </Routes>
    );
  }
}
