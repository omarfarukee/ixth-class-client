/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import './teacherAccount.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


export default function TeacherAccountCreate() {
    const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleCreateTeacherAccount = async (data) => {
   
    const teacherData = {
        first_name: data.first_name,
        last_name: data.last_name,
        fathers_name: data.fathers_name,
        mothers_name: data.mothers_name,
        address: data.address,
        blod_group: data.blod_group,
        gender: data.gender,
        email: data.email,
        contact: data.contact,
        password: data.password,
        image: '',
        role:'teacher'
    }
    try {
        const response = await fetch('https://ixth-class-sever-omarfarukee.vercel.app/create-teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacherData)
        });

        const responseData = await response.json();
        console.log(responseData.teacher)
        if (response.ok) {
            console.log('save student', responseData);
            toast.success('teachers account Created successfully, please update Your PROFILE');
            sessionStorage.setItem('studentData', JSON.stringify(responseData.teacher));
            console.log('Student data saved to sessionStorage', responseData.teacher);
            router.push('/');
        } else {
            toast.error(responseData.error || 'An error occurred while creating the student.');
        }
    } catch (error) {
        console.error('Error creating student:', error);
        toast.error('An error occurred while creating the student.');
    }

};
  const [types, setTypes] = useState(true)

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
    <div className='teacher-login-back-img'>
       <div className='flex justify-center pt-5 pb-5 text-3xl text-white'>
                <h1>Create Student Account</h1>
            </div>
            <div className='flex justify-center'>
                <div className='h-full p-5 rounded-lg lg:w-5/6 teacher-from-blur'>
                    <form className='text-white' onSubmit={handleSubmit(handleCreateTeacherAccount)}>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control">
                                <input type="text" {...register("first_name", {
                                    required: "First Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input" placeholder="First name..." />
                                {errors.first_name && <small className='ml-2 text-red-500 '>{errors.first_name?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control">
                                <input type="text" {...register("last_name", {
                                    required: "Last Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input" placeholder="Last name..." />
                                {errors.last_name && <small className='ml-2 text-red-500 '>{errors.last_name?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("fathers_name", {
                                    required: "Father's is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="father's name..." />
                                {errors.fathers_name && <small className='ml-2 text-red-500 '>{errors.fathers_name?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("mothers_name", {
                                    required: "Mother's Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="First name..." />
                                {errors.mothers_name && <small className='ml-2 text-red-500 '>{errors.mothers_name?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("gender", {
                                    required: "Gender is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="Gender..." />
                                {errors.gender && <small className='ml-2 text-red-500 '>{errors.gender?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("blod_group", {
                                    required: "Blod group is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="Blod Group..." />
                                {errors.blod_group && <small className='ml-2 text-red-500 '>{errors.blod_group?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("address", {
                                    required: "Address is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="Address..." />
                                {errors.address && <small className='ml-2 text-red-500 '>{errors.address?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 border-b-2 form-control ">
                                <input type="text" {...register("contact", {
                                    required: "Contact is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-lg input " placeholder="Contact..." />
                                {errors.contact && <small className='ml-2 text-red-500 '>{errors.contact?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs border-b-2 form-control">
                                <input type="email" {...register("email", {
                                    required: "Email is Required !"
                                })} className="w-full max-w-xs bg-transparent rounded-lg input " placeholder="✉ Email..." />
                                {errors.email && <small className='ml-2 text-red-500 '>{errors.email.message}</small>}
                            </div>
                            <div className="max-w-xs border-b-2 w-80 form-control">
                                <input type={passwordFieldType("current")} {...register("password", {
                                    required: "Password is Required !",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="w-full max-w-xs bg-transparent rounded-lg input " placeholder="🗝 Password..." />
                                <div className="flex justify-end">
                                    <a className='relative flex justify-end ml-2 text-2xl text-white cursor-pointer w-7 bottom-9 right-2' title="See password" onClick={() => seePass("current")}><FaEye /></a>
                                </div>
                                {errors.password && <small className='ml-2 text-red-500 '>{errors.password.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <input className='p-2 mt-4 text-black bg-gray-300 w-80 btn rounded-2xl' value="Sign Up" type="submit" />
                        </div>
                        <div className='flex justify-center'>
                            <small className="mt-2 font-black ">Al-ready created Account? <Link href='/login-student' className='font-bold text-green-500'>Please Log-in</Link></small>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}
