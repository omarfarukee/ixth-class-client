/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import getAllTeacher from '../lib/getAllTeacher';
import { MdAutoDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";
export default function AllTeacher() {

  const [allTeachers, setAllTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllTeacher();
        setAllTeachers(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const [resultDelete, setResultDelete] = useState([])
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, want to delete?')
        if(proceed){
            fetch( `https://ixth-class-sever-omarfarukee.vercel.app/teacher/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('deleted success')
                    const remaining = resultDelete.filter(item => item._id !== id)
                    setResultDelete(remaining)
                    window.location.reload()
                }
                else{
                    toast.error('deleted fail')
                }
            })
        }
}
  return (
    <div>
      <div className='flex justify-center mt-20 mb-5'>
        <p className='mt-10 text-2xl'> Teacher's log</p>
      </div>
      <div className='flex justify-center p-5'>
        <div className='grid grid-cols-4 gap-3'>
          {
           allTeachers?.data?.map(teacher => <div key={teacher?._id} >
              <div className="shadow-md card w-72 glass rounded-xl ">
                <figure className='p-2 bg-gray-100'>{teacher?.image ||teacher?.image === undefined ? <img className='rounded-full w-52 h-52 ' src={teacher?.image} alt="car!" /> : <p className='text-[208px]'><FaUserCircle />
                </p>}</figure>
                <div className="items-center card-body">
                 <h2 className="card-title">{teacher?.first_name} {teacher?.last_name}</h2>
                  <p>Role : {teacher?.role}</p>
                 <button className='text-2xl hover:text-red-500' onClick={() => handleDelete(teacher?._id)}><MdAutoDelete  /> </button>

                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}