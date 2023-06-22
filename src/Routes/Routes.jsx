import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddUser from "../Pages/AddUser";
import UpdateUser from "../Pages/UpdateUser";
import ViewDetails from "../Pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://skids-health-server-sigma.vercel.app/users"),
      },
      {
        path: "/add-user",
        element: <AddUser></AddUser>,
      },
      {
        path: "/view-details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://skids-health-server-sigma.vercel.app/users/${params.id}`
          ),
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://skids-health-server-sigma.vercel.app/users/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
