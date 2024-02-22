// components/PrivateRoute.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { IoIosSettings } from "react-icons/io";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push('/login-student');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return  <div className='flex items-center justify-center mt-5'>
    <IoIosSettings  className='text-gray-700 text-8xl animate-spin' />
    </div>; // Add a loading indicator if needed
  }

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
