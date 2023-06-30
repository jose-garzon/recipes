import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import { Cart } from "./pages/Cart";

export type Routes = "/" | "/calendario" | "/carrito";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "calendario",
        element: <Calendar />,
      },
      {
        path: "carrito",
        element: <Cart />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
