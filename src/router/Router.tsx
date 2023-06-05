import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
