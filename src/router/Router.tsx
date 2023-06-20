import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landing";
import { CalendarPage } from "../calendar";
import { CartPage } from "../cart";
import { FavoritesPage } from "../favorites";
import { MainLayout } from "../shared/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
