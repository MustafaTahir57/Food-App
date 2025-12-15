import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import "./index.css";
import { UserContextProvider } from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <UserContextProvider>
        <RouterProvider router={appRouter} />
    </UserContextProvider>
);
