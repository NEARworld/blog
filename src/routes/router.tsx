import React from "react";
import { createBrowserRouter } from "react-router-dom";

type HeaderName = "main";
export type Header = Record<HeaderName, JSX.Element>;

const Home = React.lazy(() => import("pages/home"));
const MainHeader = React.lazy(() => import("components/headers/main.header"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => ({
      main: <MainHeader />,
    }),
  },
]);
