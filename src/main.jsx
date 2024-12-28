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
import Details from "./Page/Details";
import Update from "./Page/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://lost-found-server-eight.vercel.app/allItems/six"),
        title: "Home",
      },
      {
        path: "/LostAndFound",
        element: <LostAndFound></LostAndFound>,
        loader: () =>
          fetch("https://lost-found-server-eight.vercel.app/allItems"),
        title: "Lost & Found",
      },
      {
        path: "/MyItems",
        element: (
          <PrivatesRoute>
            <MyItems></MyItems>,
          </PrivatesRoute>
        ),
        loader: () =>
          fetch("https://lost-found-server-eight.vercel.app/myItems"),
        title: "My Items",
      },
      {
        path: "/AllItems",
        element: (
          <PrivatesRoute>
            <AllRecoveredItems></AllRecoveredItems>,
          </PrivatesRoute>
        ),
        loader: () =>
          fetch("https://lost-found-server-eight.vercel.app/RecoveredItems"),
        title: "All Recovered Itemss",
      },
      {
        path: "/AddItems",
        element: (
          <PrivatesRoute>
            <AddItems></AddItems>,
          </PrivatesRoute>
        ),
        title: "Add Lost & Found Item",
      },
      {
        path: "login",
        element: <Login></Login>,
        title: "Login",
      },
      {
        path: "register",
        element: <Register></Register>,
        title: "Register",
      },
      {
        path: "/items/:id",
        element: (
          <PrivatesRoute>
            <Details></Details>
          </PrivatesRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://lost-found-server-eight.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivatesRoute>
            <Update></Update>
          </PrivatesRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://lost-found-server-eight.vercel.app/myItems/${params.id}`
          ),
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
