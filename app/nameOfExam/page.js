"use client"
import React, { useEffect, useState } from 'react'
import getExamName from '../lib/getExamName';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

export default function NameOfExamGet() {
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        // Fetch studentData from sessionStorage
        const userData = sessionStorage.getItem('studentData');
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setStudentData(parsedUserData);
        }
    }, []);
    const [exmaNames, setExamNames] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getExamName();
          setExamNames(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      {
        exmaNames.map(name =>
        <div key={name?._id} className='flex justify-between'>
            <div className='flex gap-10'>
                <p>Exam : <span className='font-bold'>{name?.exam_name}</span></p>
                <p>Exam Start Date: <span className='font-bold'>{name?.date}</span></p>
             </div>
               {studentData?.role && <Link href={`/nameOfExam/${name?._id}`}><button className='flex items-center gap-2'> Edit<FaEdit className='text-2xl'></FaEdit></button></Link> }
        </div>)
      }
    </div>
  )
}
