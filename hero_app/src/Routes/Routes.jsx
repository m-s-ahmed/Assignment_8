import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import SingleApp from "../Pages/signleApp/singleApp";
import AllApps from "../Pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("customData.json"),
        Component: Home,
      },
      {
        path: "/allapps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      //Rough
      {
        path: "/singleapp",
        Component: SingleApp,
      },
    ],
  },
]);
