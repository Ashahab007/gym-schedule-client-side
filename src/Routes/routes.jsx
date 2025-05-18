import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../components/RootLayout";
import Home from "../components/Home";
import AddSchedule from "../components/AddSchedule";
import AllSchedule from "../components/AllSchedule";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/addschedule", Component: AddSchedule },
      { path: "/allschedule", Component: AllSchedule },
    ],
  },
]);
