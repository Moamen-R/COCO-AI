import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from "./routes/homepage/HomePage.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";


const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/dashboardLayout',
                element: <DashboardLayout/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
