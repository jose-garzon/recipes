import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
