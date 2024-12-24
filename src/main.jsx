import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import ErrorPage from "./Page/ErrorPage";
import Home from "./Components/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import AuthProvider from "./Context/AuthContext/AuthProvider";
import LostAndFound from "./Page/LostAndFound";
import MyItems from "./Page/MyItems";
import AllRecoveredItems from "./Page/AllRecoveredItems";
import AddItems from "./Page/AddItems";
import PrivatesRoute from "./Route/PrivatesRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/LostAndFound",
        element: <LostAndFound></LostAndFound>,
        loader: () => fetch("http://localhost:5000/allItems"),
      },
      {
        path: "/MyItems",
        element: (
          <PrivatesRoute>
            <MyItems></MyItems>,
          </PrivatesRoute>
        ),
      },
      {
        path: "/AllItems",
        element: (
          <PrivatesRoute>
            <AllRecoveredItems></AllRecoveredItems>,
          </PrivatesRoute>
        ),
      },
      {
        path: "/AddItems",
        element: (
          <PrivatesRoute>
            <AddItems></AddItems>,
          </PrivatesRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
