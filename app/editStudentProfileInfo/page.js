/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function EditProfileInfo() {
    const { register, handleSubmit } = useForm();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        // Fetch studentData from sessionStorage
        const userData = sessionStorage.getItem('studentData');
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setStudentData(parsedUserData);
        }
    }, []);
    const handleUpdateStudentProfile = async (data) => {
        const dataOfStudent = {
            first_name: data.first_name || studentData?.first_name,
            last_name: data.last_name || studentData?.last_name,
            fathers_name: data.fathers_name || studentData?.fathers_name,
            mothers_name: data.mothers_name || studentData?.mothers_name,
            address: data.address || studentData?.address,
            blod_group: data.blod_group || studentData?.blod_group,
            gender: data.gender || studentData?.gender,
            email: data.email || studentData?.email,
            contact: data.contact || studentData?.contact,
        };
        console.log(dataOfStudent)

        const response = await fetch(`https://ixth-class-sever-omarfarukee.vercel.app/update/student/${studentData?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataOfStudent),
        });

        const responseData = await response.json();
        console.log(responseData);
        if (responseData?.result?.modifiedCount === 1) {
            // Update sessionStorage with the updated data
            const updatedStudentData = {
                ...studentData,
                ...dataOfStudent
            };
            console.log(updatedStudentData)
            sessionStorage.setItem('studentData', JSON.stringify(updatedStudentData));
            toast.success('Updated profile successfully');
            location.reload();
        } else {
            toast.error(responseData.error);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdateStudentProfile)}>
                <div className="lg:flex ">
                    <div className="flex justify-around w-full">
                        <div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">First Name</span></label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    {...register("first_name", {})}
                                    className="w-full max-w-xs input input-bordered rounded-3xl"
                                    defaultValue={studentData?.first_name}
                                />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Last Name</span></label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("last_name", {})}
                                    className="w-full max-w-xs input input-bordered rounded-3xl"
                                    defaultValue={studentData?.last_name}
                                />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="email" placeholder="email"
                                    {...register("email", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.email} />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Father's Name</span></label>
                                <input type="text" placeholder="Fathers's name"
                                    {...register("fathers_name", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.fathers_name} />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Mother's Name</span></label>
                                <input type="text" placeholder="mother's name"
                                    {...register("mothers_name", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.mothers_name} />
                            </div>
                        </div>
                        <div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Student Code</span></label>
                                <input type="text" placeholder="student Code"
                                    {...register("studentCode", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.studentCode} disabled />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Blod Group</span></label>
                                <input type="text" placeholder="Blod group"
                                    {...register("blod_group", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.blod_group} />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Gender</span></label>
                                <input type="text" placeholder="Gender"
                                    {...register("gender", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.gender} />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Address</span></label>
                                <input type="text" placeholder="address"
                                    {...register("address", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.address} />
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Phone Number</span></label>
                                <input type="text" placeholder="phone number"
                                    {...register("contact", {
                                    })}
                                    className="w-full max-w-xs input input-bordered rounded-3xl" defaultValue={studentData?.contact} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className="w-40 mt-4 bg-gray-300 h btn rounded-3xl" value="Update" type="submit" />
                </div>

            </form>
        </div>
    )
}
