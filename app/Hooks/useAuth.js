// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = sessionStorage.getItem('studentData');
    const isAuthenticated = userData ? true : false;

    setIsAuthenticated(isAuthenticated);
    setLoading(false);
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;
