import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../shared/hooks/useAuth';
import { Lock, User } from 'lucide-react';
import { toast } from 'sonner';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
});

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      setErrorMsg('');
      await login(data.username, data.password);
      toast.success('Login successful');
      navigate('/admin/dashboard');
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Invalid credentials');
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#141414] p-8 rounded-xl border border-[#27272A] shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F59E0B]/20">
            <Lock className="text-[#F59E0B]" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Access</h1>
          <p className="text-[#A1A1AA] text-sm mt-2">Restricted to authorized personnel only</p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-500 text-sm text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#FAFAFA] mb-2">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="text-[#A1A1AA]" size={18} />
              </div>
              <input
                type="text"
                {...register('username')}
                className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-md pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                placeholder="admin"
              />
            </div>
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#FAFAFA] mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-[#A1A1AA]" size={18} />
              </div>
              <input
                type="password"
                {...register('password')}
                className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-md pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F59E0B] text-black font-bold py-3 rounded-md hover:bg-[#FBBF24] transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
