import React from 'react';
import { useAuth } from '../../../shared/hooks/useAuth';
import { LayoutDashboard, LogOut, Code } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#141414] border-r border-[#27272A] flex flex-col">
        <div className="p-6 border-b border-[#27272A]">
          <h2 className="text-xl font-bold text-[#FAFAFA] flex items-center gap-2">
            <Code className="text-[#F59E0B]" /> CMS
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#F59E0B]/10 text-[#F59E0B] rounded-md">
            <LayoutDashboard size={20} />
            Projects
          </Link>
          {/* Future navigation links */}
        </nav>
        <div className="p-4 border-t border-[#27272A]">
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-[#A1A1AA] hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#0A0A0A]">
        <header className="h-16 border-b border-[#27272A] bg-[#141414] flex items-center justify-between px-8">
          <h1 className="font-semibold text-[#FAFAFA]">Dashboard</h1>
          <Link to="/" className="text-sm text-[#F59E0B] hover:underline" target="_blank">
            View Live Site
          </Link>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
