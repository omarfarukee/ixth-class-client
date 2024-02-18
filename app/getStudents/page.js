'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */

import React, { useEffect, useState } from 'react'
import getAllStudent from '../lib/getAllStudents'
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { MdAutoDelete } from "react-icons/md";
import toast from 'react-hot-toast';
export default async function AllStudentsGet() {

  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
      const userData = sessionStorage.getItem('studentData');
      if (userData) {
          const parsedUserData = JSON.parse(userData);
          setStudentData(parsedUserData);
      }
  }, []);

  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllStudent();
        const sortedResults = result.data.sort((a, b) => {
          return a.studentCode.localeCompare(b.studentCode);
      });
        setAllStudents(sortedResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [resultDelete, setResultDelete] = useState([])
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, want to delete this student?')
        if(proceed){
            fetch( `http://localhost:5000/student/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('result deleted')
                    const remaining = resultDelete.filter(item => item._id !== id)
                    setResultDelete(remaining)
                    window.location.reload()
                }
                else{
                    toast.error('student is not deleted')
                }
            })
        }
}
  return (
    <div>
      <div className='flex justify-center mt-20 mb-5'>
        <p className='text-2xl mt-10'> IX-Students</p>
      </div>
      <div className='flex justify-center p-5'>
        <div className='grid grid-cols-4 gap-3'>
          {
            allStudents?.map(student => <div key={student?._id} >
              <div className="shadow-md card w-72 glass rounded-xl ">
                <figure className='p-2 bg-gray-100'>{student?.image || student?.image === undefined ? <img className='rounded-full w-52 h-52 ' src={student?.image} alt="car!" /> : <p className='text-[208px]'><FaUserCircle />
                </p>}</figure>
                <div className="items-center card-body">
                  <Link href={`/getStudents/${student?._id}`}> <h2 className="card-title">{student?.first_name} {student?.last_name}</h2></Link>
                  <p>Student Code : {student?.studentCode}</p>
                 {studentData?.role && <button className='text-2xl hover:text-red-500' onClick={() => handleDelete(student?._id)}><MdAutoDelete  /> </button>}

                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}
