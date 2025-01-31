import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router';
import HomePage from "./routes/homepage/HomePage.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import ChatPage from "./routes/chatpage/ChatPage.jsx";
import SignInPage from "./routes/signinpage/SignInPage.jsx";
import SignUpPage from "./routes/signuppage/SignUpPage.jsx";
import {ComponentPreview, DevSupport} from "@react-buddy/ide-toolbox";
import DashboardPage from "./routes/dashboard/DashboardPage.jsx";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/sign-in',
                element: <SignInPage />
            },
            {
                path: '/sign-up',
                element: <SignUpPage />
            },
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardPage />,
                    },
                    {
                        path: '/dashboard/chats/:id',
                        element: <ChatPage />
                    },
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreview}>
            <RouterProvider router={router} />
        </DevSupport>
    </React.StrictMode>
);