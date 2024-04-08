import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import Stopper from "./Stopper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>Homepage</div>,
      },
      {
        path: "pomodoro",
        element: <Pomodoro />,
      },
      {
        path: "stopper",
        element: <Stopper meddig={10}></Stopper>,
      },
    ],
  },
], {basename: "/timer"});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
