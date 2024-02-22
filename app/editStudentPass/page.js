"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaUserLock } from 'react-icons/fa'

export default function EditStudentnPass() {
        const { register, handleSubmit, getValues, formState: { errors }} = useForm()
        const [hideCurrent, setHideCurrent] = useState(true);
        const [hideNew, setHideNew] = useState(true);
        const [hideConfirm, setHideConfirm] = useState(true);
        const [studentData, setStudentData] = useState(null);

        useEffect(() => {
          const userData = sessionStorage.getItem('studentData');
          if (userData) {
            const parsedUserData = JSON.parse(userData);
            setStudentData(parsedUserData);
          }
        }, []);
        const seePass = (type) => {
            switch (type) {
                case "current":
                    setHideCurrent(!hideCurrent);
                    break;
                case "new":
                    setHideNew(!hideNew);
                    break;
                case "confirm":
                    setHideConfirm(!hideConfirm);
                    break;
                default:
                    break;
            }
        };
        const passwordFieldType = (type) => {
            switch (type) {
                case "current":
                    return hideCurrent ? "password" : "text";
                case "new":
                    return hideNew ? "password" : "text";
                case "confirm":
                    return hideConfirm ? "password" : "text";
                default:
                    return "password";
            }
        };
        const handleUpdatePassword = async (data) => {
            const newPassword = data.password;
            const confirmNewPassword = getValues("confirmPassword");
    
            if (newPassword !== confirmNewPassword) {
                toast.error("New password and confirm password do not match");
                return;
            }
    
            const userPassData = {
                password: newPassword,
            };
    
            try {
                const response = await fetch(`https://ixth-class-sever-omarfarukee.vercel.app/update/student/${studentData?._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userPassData),
                });
    
                const studentPass = await response.json();
    
                if (studentPass?.result?.modifiedCount === 1) {
                    const updatedStudentData = {
                        ...studentData,
                        ...studentPass.updatedData
                    };
                    console.log(updatedStudentData)
                    sessionStorage.setItem('studentData', JSON.stringify(updatedStudentData));
                    toast.success('Updated password successfully');
                    location.reload();
                } else {
                    toast.error(studentPass.error);
                }
            } catch (error) {
                console.error('Error changing password:', error);
                toast.error('Failed to change password');
            }
        };
    



  return (
    <div>
            <div>
                <div>
                    <div className="flex justify-center mb-10 border-b-8">
                        <div className=''>
                            <FaUserLock className="ml-10 text-6xl text-blue-700"> </FaUserLock>
                            <h1 className="font-bold">Change Password</h1>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <form onSubmit={handleSubmit(handleUpdatePassword)} className="mb-10">
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">Current Password</span></label>
                            <div className="flex items-center">
                                <input
                                    type={passwordFieldType("current")}
                                    defaultValue={studentData?.password}
                                    className="w-full max-w-xs input input-bordered rounded-3xl"
                                    disabled
                                />
                                <a className='ml-2 text-2xl text-blue-800 cursor-pointer' title="See password" onClick={() => seePass("current")}><FaEye /></a>
                            </div>
                        </div>

                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">New Password</span></label>
                            <div className="flex items-center">
                                <div className="w-full">
                                    <input
                                        type={passwordFieldType("new")}
                                        {...register("password", {
                                            required: "Filed is Required !",
                                            minLength: { value: 6, message: "Password must be 6 characters long" },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}
                                        className="w-full max-w-xs input input-bordered rounded-3xl"
                                    />
                                    <small> {errors.password && <p className='text-red-600'>{errors.password.message}</p>}</small>
                                </div>

                                <a className='ml-2 text-2xl text-blue-800 cursor-pointer' title="See password" onClick={() => seePass("new")}><FaEye /></a>
                            </div>
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">Confirm Password</span></label>
                            <div className="flex items-center">
                                <div className="w-full">
                                    <input
                                        type={passwordFieldType("confirm")}
                                        {...register("confirmPassword", {
                                            required: "Field is Required !",
                                            minLength: { value: 6, message: "Password must be 6 characters long" },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}
                                        className="w-full max-w-xs input input-bordered rounded-3xl"
                                    />
                                    <small>{errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}</small>
                                </div>

                                <a className='ml-2 text-2xl text-blue-800 cursor-pointer' title="See password" onClick={() => seePass("confirm")}><FaEye /></a>
                            </div>
                        </div>
                        <div className="mt-5 ml-28">
                            <input className="text-white bg-blue-600 hover:text-black btn rounded-3xl" value="Update" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
