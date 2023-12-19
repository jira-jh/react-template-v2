import React, { lazy } from "react";
import ProtectedRoute from "../shared/authguard.service";
import MainLayout from "../layout/MainLayout";
const NotFound = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))
const MainPage = lazy(() => import('../pages/MainPage/MainPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))

const routeLink = [
    { path: '/login', element: <LoginPage /> },
    // AuthGuard
    { path: '/', element: <MainPage />, guard: true },
    // Not Found Page
    { path: '*', element: <NotFound /> },
];

export default routeLink