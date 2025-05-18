import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../components/RootLayout";
import Home from "../components/Home";
import AddSchedule from "../components/AddSchedule";
import AllSchedule from "../components/AllSchedule";
import UpdateSchedule from "../components/UpdateSchedule";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/addschedule", Component: AddSchedule },
      {
        path: "/allschedule",
        // loader: () => fetch("http://localhost:3000/schedule"),
        Component: AllSchedule,
      },
      {
        path: "/updateschedule/:id",
        // 1.3 load the api
        loader: ({ params }) =>
          fetch(`http://localhost:3000/schedule/${params.id}`),
        Component: UpdateSchedule,
      },
    ],
  },
]);
