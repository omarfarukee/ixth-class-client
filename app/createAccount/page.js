'use client'
import React, { useState } from 'react'
import './account.css'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';

export default function CreateAccount() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCreateStudentAccount = async (data) => {
        const studentData = {
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
            image: ''
        }
        try {
            const response = await fetch('http://localhost:5000/create-students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });
    
            const responseData = await response.json();
            console.log(responseData.student)
            if (response.ok) {
                console.log('save student', responseData);
                toast.success('Student ID Created successfully');
                sessionStorage.setItem('studentData', JSON.stringify(responseData.student));
                console.log('Student data saved to sessionStorage', responseData.stdent);
              
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
        <div className=' account-back-img'>
            <div className='flex justify-center pt-10 pb-10 text-3xl text-white'>
                <h1>Create Student Account</h1>
            </div>
            <div className='flex justify-center'>
                <div className='h-full p-5 border rounded-lg lg:w-5/6 blurry'>
                    <form className='text-white' onSubmit={handleSubmit(handleCreateStudentAccount)}>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 form-control">
                                <input type="text" {...register("first_name", {
                                    required: "First Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="First name..." />
                                {errors.first_name && <small className='mt-1 ml-2 text-red-500'>{errors.first_name?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("last_name", {
                                    required: "Last Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="First name..." />
                                {errors.last_name && <small className='mt-1 ml-2 text-red-500'>{errors.last_name?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("fathers_name", {
                                    required: "Last Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="father's name..." />
                                {errors.fathers_name && <small className='mt-1 ml-2 text-red-500'>{errors.fathers_name?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("mothers_name", {
                                    required: "Last Name is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="First name..." />
                                {errors.mothers_name && <small className='mt-1 ml-2 text-red-500'>{errors.mothers_name?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("gender", {
                                    required: "Gender is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="Gender..." />
                                {errors.gender && <small className='mt-1 ml-2 text-red-500'>{errors.gender?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("blod_group", {
                                    required: "Blod group is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="Blod Group..." />
                                {errors.blod_group && <small className='mt-1 ml-2 text-red-500'>{errors.blod_group?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("address", {
                                    required: "Address is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="Address..." />
                                {errors.address && <small className='mt-1 ml-2 text-red-500'>{errors.address?.message}</small>}
                            </div>
                            <div className="w-full max-w-xs mb-2 form-control ">
                                <input type="text" {...register("contact", {
                                    required: "Contact is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="Contact..." />
                                {errors.contact && <small className='mt-1 ml-2 text-red-500'>{errors.contact?.message}</small>}
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className="w-full max-w-xs mb-2 form-control">
                                <input type="email" {...register("email", {
                                    required: "Email is Required !"
                                })} className="w-full max-w-xs mb-2 bg-transparent rounded-3xl input input-bordered" placeholder="✉ Email..." />
                                {errors.email && <small className='mt-1 ml-2 text-red-500'>{errors.email.message}</small>}
                            </div>
                            <div className="max-w-xs w-80 form-control">
                                <input type={passwordFieldType("current")} {...register("password", {
                                    required: "Password is Required !",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="w-full max-w-xs bg-transparent rounded-3xl input input-bordered" placeholder="🗝 Password..." />
                                <div className="flex justify-end">
                                    <a className='relative flex justify-end ml-2 text-2xl text-blue-800 cursor-pointer w-7 bottom-9 right-2' title="See password" onClick={() => seePass("current")}><FaEye /></a>
                                </div>
                                {errors.password && <small className='ml-2 text-red-500 '>{errors.password.message}</small>}
                            </div>
                        </div>
                        <div>
                            <input className='p-2 mt-4 mb-4 text-black bg-blue-400 w-80 btn rounded-3xl' value="Sign Up" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
