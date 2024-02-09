'use client'
import React from 'react'
import Link from "next/link";
import { FaUserCircle } from 'react-icons/fa';
import { useStudentData } from '../Hooks/getUserData';
import toast from 'react-hot-toast';
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const studentData = useStudentData();
  const handleLogout = () => {
    sessionStorage.removeItem('studentData')
    toast.success('logged out successfully')
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
              <li><Link href='/createAccount'>Create-Account</Link></li>
              <li><Link href='/'>HOME</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl btn btn-ghost">IX-TH CLASS</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1 text-4xl "><FaUserCircle/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border">
             { studentData ?<> <li><a>MY-PROFILE</a></li>
              <li onClick={() => handleLogout()} className='text-white bg-red-500 rounded-sm'><a>LOG-OUT</a></li>
              </>:
                   <li><a>LOG-IN</a></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
