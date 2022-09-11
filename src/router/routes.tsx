import React from "react";
import { Navigate } from "react-router-dom";
import { CartPage, CategoryPage, ProductPage } from "../pages";

export interface IRoute {
  path: string;
  key: string;
  element: React.ReactNode;
}

export enum RouteNames {
  CART = "/cart",
  CATEGORY = "/:category",
  PRODUCT = "/products/:product",
}

export const routes: IRoute[] = [
  { path: RouteNames.CART, key: RouteNames.CART, element: <CartPage /> },
  {
    path: RouteNames.CATEGORY,
    key: RouteNames.CATEGORY,
    element: <CategoryPage />,
  },
  {
    path: RouteNames.PRODUCT,
    key: RouteNames.PRODUCT,
    element: <ProductPage />,
  },
  {
    path: "*",
    key: "*",
    element: <Navigate to={"/all"} replace />,
  },
];
