'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */

import React, { useEffect, useState } from 'react'
import getAllStudent from '../lib/getAllStudents'
import {  FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

export default async function AllStudentsGet() {

  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllStudent();
        setAllStudents(result.data); // Assuming data is the key containing student array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className='flex justify-center mt-10 mb-5'>
        <p className='text-2xl'> XI-Students</p>
      </div>
      <div className='flex justify-center p-5'>
        <div className='grid grid-cols-4 gap-3'>
          {
            allStudents?.map(student => <div key={student._id} >
              <div className="shadow-md card w-72 glass rounded-xl">
                <figure className='p-2 bg-gray-100'>{student?.image || student?.image === undefined ? <img className='rounded-full w-52 h-52 ' src={student?.image} alt="car!" /> : <p className='text-[208px]'><FaUserCircle />
                </p>}</figure>
                <div className="items-center card-body">
                <Link href= {`/getStudents/${student?._id}`}> <h2 className="card-title">{student?.first_name} {student?.last_name}</h2></Link>
                
                  <p>How to park your car at your garage?</p>

                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}
