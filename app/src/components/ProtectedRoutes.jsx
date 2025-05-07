import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import AuthStore from '../Store/AuthStore'

const ProtectedRoutes = ({children}) => {
    const token = AuthStore((state) => state.token);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/register" state={{ from: location }}  replace />;
      }
    return children;
}

export default ProtectedRoutes