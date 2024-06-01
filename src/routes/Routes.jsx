import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";

const Routes = () => {
  const publicRoutes = [{ path: "/", element: <h1>HOME</h1> }];
  const privateRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/contacts", element: <h1>CONTACTS</h1> },
  ];

  const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

  return <RouterProvider router={router} />;
};
export default Routes;
