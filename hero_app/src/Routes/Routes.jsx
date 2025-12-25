import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import SingleApp from "../Pages/signleApp/singleApp";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

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
        loader: () => fetch("customData.json"),
        Component: AllApps,
      },
      {
        path: "/installation",
        loader: () => fetch("customData.json"),
        Component: Installation,
      },
      {
        path: "/appdetails/:id",
        loader: async () => {
          const res = await fetch("/customData.json");
          const data = await res.json();
          return data;
        },
        Component: AppDetails,
      },
      //Rough
      {
        path: "/singleapp",
        Component: SingleApp,
      },
    ],
  },
]);
