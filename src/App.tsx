import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
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

export default App;
