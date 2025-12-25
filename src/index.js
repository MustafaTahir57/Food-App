import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import "./index.css";
import { UserContextProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={appStore}> 
    <UserContextProvider>
        <RouterProvider router={appRouter} />
    </UserContextProvider>
    </Provider>
);
