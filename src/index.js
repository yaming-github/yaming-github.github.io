import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createRoot} from "react-dom";
import {Page} from "./page";
import {About} from "./about";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
