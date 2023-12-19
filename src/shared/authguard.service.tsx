import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
export type ProtectedRouteProps = {
    component: JSX.Element;
};

function ProtectedRoute({ component }: ProtectedRouteProps) {
    const isAuthenticated = false
    // const { isAuthenticated } = useSelector((state: any) => state.authentication.profile.isAuthenticated ?? undefined);
    if (isAuthenticated) {
        return component
    } else {
        return <Navigate to='/login' />;
    }
};

export default ProtectedRoute