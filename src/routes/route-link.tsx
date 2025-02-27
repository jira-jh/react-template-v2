import { lazy } from "react";
const NotFound = lazy(() => import('../pages/NotFoundPage'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const LoginPage = lazy(() => import('../pages/LoginPage'))

const routeLink = [
    { path: '/login', element: <LoginPage /> },
    // AuthGuard
    { path: '/dashboard', element: <Dashboard />, guard: true },
    // Not Found Page
    { path: '*', element: <NotFound /> },
];

export default routeLink