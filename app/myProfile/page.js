/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import EditProfileInfo from '../editStudentProfileInfo/page';
import EditImage from '../editStudentImage/page';
import EditStudentnPass from '../editStudentPass/page';
import EditTeacherInfo from '../editTeacherInfo/page';
import EditTeacherImage from '../editTeacherImage/page';
import EditTeacherPass from '../editTeacherPass/page';
import PrivateRoute from '../Components/page';


export default function MyProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
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
  const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
  const openImageModal = () => {
    setIsImageModalOpen(true);
  };
  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };
  const [isPasswordModalOpen, setIsPasswordModalOpen] = React.useState(false);
  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };
  
  return (
    <PrivateRoute>
    <div className='flex gap-5'>
      <div className='h-screen p-2 bg-gray-100 w-96'>
        {studentData?.role ? <h1 className='flex justify-center text-2xl'>Teacher's Dash-board</h1> : <h1 className='flex justify-center text-2xl'>Student's Dash-board</h1>}
        <div className='flex justify-center'>
          <div>
            <div className="mt-3">
              <button className='w-48 p-2 bg-gray-200 border rounded-lg hover:bg-gray-300' onClick={openUserModal}>Edit Profile</button>
            </div>
            <div className="mt-3">
              <button className='w-48 p-2 bg-gray-200 border rounded-lg hover:bg-gray-300' onClick={openImageModal}>Upload Photo</button>
            </div>
            <div className="mt-3">
              <button className='w-48 p-2 bg-gray-200 border rounded-lg hover:bg-gray-300' onClick={openPasswordModal}>Change pass</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-5'>
        <marquee direction="left">
          {studentData?.role ? <p className='font-bold text-red-500'>Dear Faculty Member,As we approach the examination period, it is imperative that we ensure the smooth conduct of assessments. We kindly request all subject teachers to prepare and submit their respective question papers by the next month.

          </p> : <p className='font-bold text-red-500'>Dear Student,We hope this message finds you well. We would like to inform you that the upcoming examinations are approaching swiftly. It's crucial to begin your preparations earnestly to excel in your academic endeavors.</p>}
        </marquee>

        <dialog id="my_modal_4" className="modal" open={isUserModalOpen} onClose={closeUserModal}>
          <div className="w-11/12 max-w-5xl modal-box rounded-3xl">
            <div className="modal-content">
              <div className="flex justify-center mb-2 border-b-8 modal-header">
                <div className=''>
                  <FaUserEdit className="ml-5 text-6xl text-gray-900"></FaUserEdit>
                  <h1 className="font-bold">Edit Profile</h1>
                </div>
              </div>
              <div className="modal-body">
                {!studentData?.role ? <EditProfileInfo />
                  : <EditTeacherInfo />}
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="my_modal_2" className=" modal" open={isImageModalOpen} onClose={closeImageModal}>
          <div className="modal-box rounded-2xl">
            <div>
              {!studentData?.role ? <EditImage />
                : <EditTeacherImage />}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="my_modal_2" className=" modal" open={isPasswordModalOpen} onClose={closePasswordModal}>
          <div className="modal-box rounded-2xl">
            <div>
              {!studentData?.role ? <EditStudentnPass />
                : <EditTeacherPass />}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <div>
          <div className='w-full p-5 shadow-lg bg-base-200 rounded-xl'>{studentData?.image === '' ? <p className='text-9xl'><FaUserCircle></FaUserCircle></p> : <img alt='' className='w-[128px] h-32 rounded-full  ring ring-primary' src={studentData?.image} />}
          </div>
          <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Name:
            <span className='flex gap-2'><p>{studentData?.first_name}</p>
              <p>{studentData?.last_name}</p></span>
          </div>
          {studentData?.studentCode && <div className='flex gap-2 p-3 mt-2 font-bold border rounded-lg bg-slate-300'>
            Student Code:
            <span className='flex gap-2'><p>{studentData?.studentCode}</p>
            </span>
          </div>}
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
    </div></PrivateRoute>
  );
}

