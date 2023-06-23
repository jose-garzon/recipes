import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landing";
import { CalendarPage } from "../calendar";
import { CartPage } from "../cart";
import { MainLayout } from "../shared/components/Layout";
import { RecipePage } from "../recipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/calendario",
        element: <CalendarPage />,
      },
      {
        path: "/carrito",
        element: <CartPage />,
      },
      {
        path: "/receta/:id",
        element: <RecipePage />,
      },
    ],
  },
]);
