/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import EditStudentInfo from '../editStudentProfile/page';

export default function StudentProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch studentData from sessionStorage
    const userData = sessionStorage.getItem('studentData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setStudentData(parsedUserData);
    }
  }, []);
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);
  const openUserModal = () => {
      setIsUserModalOpen(true);
  };
  const closeUserModal = () => {
      setIsUserModalOpen(false);
  };
  console.log(studentData?.image)
  return (
    <div className='flex gap-10'>
      <div className='p-2 bg-gray-100 w-52'>
        <h1 className='flex justify-center text-2xl'>Dash-Board</h1>
        <div className="mt-3">
          <button className='w-48 p-2 bg-gray-200 border rounded-lg hover:bg-gray-300' onClick={openUserModal}>Edit Profile</button>
        </div>
      </div>
      <div className='w-full p-5'>
      <dialog id="my_modal_4" className="modal" open={isUserModalOpen} onClose={closeUserModal}>
                            <div className="w-11/12 max-w-5xl modal-box rounded-3xl">
                                <div className="modal-content">
                                    <div className="flex justify-center mb-2 border-b-8 modal-header">
                                        <div className=''>
                                            <FaUserEdit className="ml-5 text-6xl text-blue-900"></FaUserEdit>
                                            <h1 className="font-bold">Edit Profile</h1>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <EditStudentInfo/>
                                    </div>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
        <div >
          <div className='w-full p-5 border '>{studentData?.image === '' ? <p className='text-9xl'><FaUserCircle></FaUserCircle></p> : <Image src={studentData?.img} alt='' />}
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Name:
            <span className='flex gap-2'><p>{studentData?.first_name}</p>
              <p>{studentData?.last_name}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
          Student Code:
            <span className='flex gap-2'><p>{studentData?.studentCode}</p>
              </span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
          Father's Name:
            <span className='flex gap-2'><p>{studentData?.fathers_name}</p>
              </span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Mother's Name:
            <span className='flex gap-2'><p></p>
              <p>{studentData?.mothers_name}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Address:
            <span className='flex gap-2'><p></p>
              <p>{studentData?.address}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Blod Group:
            <span className='flex gap-2'>
              <p>{studentData?.blod_group}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
          Gender:
            <span className='flex gap-2'>
              <p>{studentData?.gender}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
          Email:
            <span className='flex gap-2'>
              <p>{studentData?.email}</p></span>
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
          Phone Number:
            <span className='flex gap-2'>
              <p>{studentData?.contact}</p></span>
          </div>

        </div>

      </div>
    </div>
  );
}

