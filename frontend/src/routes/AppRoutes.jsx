import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../modules/admin/components/ProtectedRoute';
import Portfolio from '../modules/portfolio/pages/Portfolio';
import AdminLogin from '../modules/admin/pages/AdminLogin';
import AdminLayout from '../modules/admin/components/AdminLayout';
import AdminDashboard from '../modules/admin/pages/AdminDashboard';

// Public Pages (Placeholders for now)
const ProjectDetails = () => <div className="p-10 text-white min-h-screen bg-black">Project Details</div>;

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      
      {/* Admin Public Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* Admin Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Add more admin routes here later */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
