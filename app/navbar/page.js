'use client'
import React from 'react'
import Link from "next/link";
import { FaUserCircle } from 'react-icons/fa';
import { useStudentData } from '../Hooks/getUserData';
export default function page() {
    const studentData = useStudentData();
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
                <li><Link href='/createAccount'>Account</Link></li>
                <li><Link href='/'>HOME</Link></li>
                
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="text-xl btn btn-ghost">IX-TH CLASS</a>
          </div>
          <div className="navbar-end">
            <p>{studentData?.email}</p>
              <div >
               <p className="text-4xl cursor-pointer indicator"><FaUserCircle/></p> 
              </div>     
          </div>
        </div>
    </div>
  )
}
