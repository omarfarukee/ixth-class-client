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
export default function page() {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const studentData = useStudentData();
  const handleLogout = () => {
    sessionStorage.removeItem('studentData')
    toast.success('logged out successfully')
    router.push('/');
  }

  return (
    <div>
      <div className="shadow-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href='/'>HOME</Link></li>
              {studentData ? <>
                <li><Link href='/'>STUDENTS</Link></li></> :
                <> <li><Link href='/createAccount'>Create-Account</Link></li></>}

            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl btn btn-ghost">IX-TH CLASS</a>
        </div>
        <div className="navbar-end">


     { studentData ? 

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
              <li><Link href='/studentProfile'>MY-PROFILE</Link></li>
              <li onClick={() => handleLogout()} className='text-white bg-red-500 rounded-sm'><a>LOG-OUT</a></li>


            </ul>
          </div>

:
          <Link href='/login-student'><button className='flex items-center gap-2 p-2 font-bold rounded-sm bg-base-200 hover:bg-base-300'>
              LOG-IN <IoMdLogIn className='text-2xl' />
            </button></Link>
}
        </div>
      </div>
    </div>
  )
}
