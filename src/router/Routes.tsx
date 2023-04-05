import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Checkout from "../Checkout";
import Home from "../Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
