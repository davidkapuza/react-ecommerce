import React from "react";
import { Route, Routes } from "react-router-dom";
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
