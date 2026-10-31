import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../shared/hooks/useAuth';

const ProtectedRoute = () => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-black text-white">Loading...</div>;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
