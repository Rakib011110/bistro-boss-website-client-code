import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
