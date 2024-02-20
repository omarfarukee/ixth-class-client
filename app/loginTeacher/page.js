/* eslint-disable react/no-unescaped-entities */
'use client'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import '../teacherAccountCreate/teacherAccount.css'
import toast from 'react-hot-toast';
import Link from 'next/link';
export default function LoginTeacher() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [types, setTypes] = useState(true)

  const handleLogin = async (data) => {
    try {
      const response = await fetch('https://ixth-class-sever-omarfarukee.vercel.app/teacher/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log('Login response:', responseData.teacher); // Log the entire response

      if (response.ok) {
        console.log('Login successful'); // Log success message
        toast.success(responseData.message);
        sessionStorage.setItem('studentData', JSON.stringify(responseData.teacher));
        console.log('teacher data saved to sessionStorage:', responseData.teacher);
        router.push('/');
      } else {
        console.error('Login failed:', responseData.error || 'fail to login.'); // Log failure message
        toast.error(responseData.error || 'fail to login.');
      }
    } catch (error) {
      console.error('Error during login:', error); // Log any errors
      toast.error('An error occurred while logging in.');
    }
    ;
  }

  const seePass = (type) => {
    switch (type) {
      case "current":
        setTypes(!types);
        break;
    }
  };
  const passwordFieldType = (type) => {
    switch (type) {
      case "current":
        return types ? "password" : "text";
    }
  };
  return (
    <div className='teacher-login-back-img '>
      <div className='flex justify-center pt-5 pb-5 text-3xl text-white mb-[80px]'>
        <h1>Teacher's Log-in</h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='p-10 rounded-lg teacher-from-blur-login'>
          <form onSubmit={handleSubmit(handleLogin)} className=" lg:pt-5">
            <div className="max-w-xs mb-4 border-b-2 w-80 form-control">
              <input type="email" {...register("email", {
                required: "Email is Required !"
              })} className="w-full max-w-xs mb-5 text-white bg-transparent rounded-lg input" placeholder="✉ Email..." />
              {errors.email && <small className='mt-1 ml-2 text-red-500'>{errors.email.message}</small>}
            </div>
            <div className="max-w-xs mb-3 border-b-2 w-80 form-control">
              <input type={passwordFieldType("current")} {...register("password", {
                required: "Password is Required !",
                minLength: { value: 6, message: "Password must be 6 characters long" },
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
              })} className="w-full max-w-xs text-white bg-transparent rounded-lg input" placeholder="🗝 Password..." />
              <div className="flex justify-end">
                <a className='relative flex justify-end ml-2 text-2xl text-white cursor-pointer w-7 bottom-9 right-2' title="See password" onClick={() => seePass("current")}><FaEye /></a>
              </div>
              {errors.password && <small className='mt-1 ml-2 text-red-500'>{errors.password.message}</small>}
            </div>
            <input className='p-2 mt-4 mb-4 text-black bg-gray-300 bottom-5 w-80 btn rounded-2xl' value="Login" type="submit" />
          </form>
          <div className='flex justify-center'>
            <small className="mt-2 font-black text-white">Are you a student? <Link href='/login-student' className='font-bold text-green-500'>Log-in</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}
