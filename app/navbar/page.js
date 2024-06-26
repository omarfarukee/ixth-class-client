/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { IoMdLogIn } from "react-icons/io";
import React from 'react'
import Link from "next/link";
import { FaUserCircle } from 'react-icons/fa';
import { useStudentData } from '../Hooks/getStudentData';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import logos from '../../public/logo/logos.png'
import Image from "next/image";
export default function page() {
  
const router = useRouter();
  const studentData = useStudentData();
  const handleLogout = () => {
    sessionStorage.removeItem('studentData')
    toast.success('logged out successfully')
     window.location.reload();
  }

  return (
    <div>
      <div className="fixed top-0 z-50 w-full shadow-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/getStudents'>Student profile</Link></li> 
              <li> <Link href='/finalResult'>Result Sheet</Link></li>
              {!studentData && <li><Link href='/createAccount'>Create Student Account</Link></li>}
             {!studentData && <li><Link href='/teacherAccountCreate'>Create Techer Acoount</Link></li>}
             {!studentData && <li><Link href='/loginTeacher'>Teacher's Login</Link></li>}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
        <Link href='/'><Image className='rounded-lg' src={logos}/></Link>
        </div>
        <div className="navbar-end">
          {studentData ?

            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">

              <div tabIndex={0} role="button" className="m-1">

                {!studentData?.image ? <> <FaUserCircle className='text-3xl'></FaUserCircle></>

                  :
                  <div className="avatar online">
                    <div className="rounded-full w-9">
                      <img src={studentData?.image} />
                    </div>
                  </div>

                }
              </div>

              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border">
                <li><Link href='/myProfile'>MY-PROFILE</Link></li>
                {studentData?.studentCode &&<li><Link href='/viewResult'>My Result</Link></li>}
                {studentData?.role && <li><Link href='/createResult'>Create Result</Link></li>}
                {studentData?.role && <li><Link href='/resultSheet'>Result Sheet</Link></li>}
                {studentData?.role && <li><Link href='/finalResult'>Final Result</Link></li>}
                {studentData?.role === "teacher-admin" && <li><Link href='/allTeachers'>Teacher's Log</Link></li>}
                <li onClick={() => handleLogout()} className='text-white bg-red-500 rounded-sm'><a>LOG-OUT</a></li>
              </ul>
            </div>

            :
            <Link href='/login-student'><button className='flex items-center gap-2 p-2 font-bold rounded-sm btn btn-ghost bg-base-300'>
              LOG-IN <IoMdLogIn className='text-2xl' />
            </button></Link>
          }
        </div>
      </div>
    </div>
  )
}
