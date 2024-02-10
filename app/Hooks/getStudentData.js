'use client'
import { useState, useEffect } from 'react';

export const useStudentData = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch studentData from sessionStorage
    const userData = sessionStorage.getItem('studentData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setStudentData(parsedUserData);
    }
  }, []);

  return studentData;
};
