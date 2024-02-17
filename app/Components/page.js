// components/PrivateRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push('/login-student');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator if needed
  }

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
