import React, { useEffect, useState } from 'react';
import apiClient from '../../../shared/api/axiosClient';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const { data } = await apiClient.get('/admin/projects');
      setProjects(data.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await apiClient.delete(`/admin/projects/${id}`);
      toast.success('Project deleted successfully');
      fetchProjects();
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete project');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
        <button className="bg-[#F59E0B] text-black px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-[#FBBF24] transition-colors">
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="bg-[#141414] border border-[#27272A] rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-[#A1A1AA]">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-[#A1A1AA]">No projects found. Create one!</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#27272A] bg-zinc-900/50">
                <th className="p-4 font-medium text-[#A1A1AA]">Title</th>
                <th className="p-4 font-medium text-[#A1A1AA]">Status</th>
                <th className="p-4 font-medium text-[#A1A1AA]">Featured</th>
                <th className="p-4 font-medium text-[#A1A1AA] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-[#27272A] last:border-0 hover:bg-zinc-800/30">
                  <td className="p-4 font-medium text-white">{project.title}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${project.status === 'published' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4 text-[#A1A1AA]">{project.featured ? 'Yes' : 'No'}</td>
                  <td className="p-4 flex justify-end gap-3">
                    <button className="text-blue-400 hover:text-blue-300"><Edit2 size={18} /></button>
                    <button onClick={() => handleDelete(project.id)} className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
