import React, { useState, useEffect } from 'react';
import apiClient from '../shared/api/axiosClient';
import { AuthContext } from './authContextInstance';

export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdmin(true);
    }
    setLoading(false);

    const handleUnauthorized = () => {
      setIsAdmin(false);
    };

    window.addEventListener('auth-unauthorized', handleUnauthorized);
    return () => window.removeEventListener('auth-unauthorized', handleUnauthorized);
  }, []);

  const login = async (username, password) => {
    const { data } = await apiClient.post('/auth/login', { username, password });
    localStorage.setItem('adminToken', data.data.token);
    setIsAdmin(true);
    return data;
  };

  const logout = async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem('adminToken');
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
