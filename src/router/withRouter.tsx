import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export type WithRouterProps = {
  router?: {
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    params: ReturnType<typeof useParams<{ category: string, product: string}>>;
  };
};

export default function withRouter(
  Component: React.ComponentClass<any>
) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}