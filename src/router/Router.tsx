import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landing";
import { CalendarPage } from "../calendar";
import { CartPage } from "../cart";
import { FavoritesPage } from "../favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
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
]);
