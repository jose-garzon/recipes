import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/Layout";

export type Routes = "/" | "/calendario" | "/carrito";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Recetas</div>,
      },
      {
        path: "calendario",
        element: <div>Calendario</div>,
      },
      {
        path: "carrito",
        element: <div>Carrito</div>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
