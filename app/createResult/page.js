/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react'
import getAllStudent from '../lib/getAllStudents'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ExamNameSet from '../examNameSet/page';
export default function CreateResult() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [allStudentsInfo, setAllStudentsInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllStudent();
                setAllStudentsInfo(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddResult = async (data) => {
        const studentsMarks = {
            physics: parseInt(data.physics),
            name: data.name,
            chemistry: parseInt(data.chemistry),
            biology: parseInt(data.biology),
            math: parseInt(data.math),
            bangla: parseInt(data.bangla),
            english: parseInt(data.english),
            history: parseInt(data.history),
            studentCode: data.studentCode || '001'
        }
        try {
            const response = await fetch('http://localhost:5000/create-result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentsMarks)
            });
            const responseData = await response.json();
            if (responseData.success === true) {
                toast.success(responseData.message)
                reset();
                location.reload();
            }
            else {
                toast.error(responseData.message)
            }
        } catch (error) {
            console.error('Error creating student:', error);
            toast.error('An error occurred while creating the result.');
        }

    }

    const sortedStudents = allStudentsInfo.sort((a, b) => a.studentCode - b.studentCode);

    return (
        <div>
            <marquee direction="left" className="w-full mt-5 font-bold text-red-700">
                [Note]:Dear Teacher's an exam requires only an exam name and a date, not a second time.If you have submitted name and date once, do not do it again.If you do it wrongly then check the result sheet and correct it
            </marquee>
            <div className='flex justify-between gap-5 p-5'>

                <div>
                    <ExamNameSet />
                </div>
                <div className='w-3/4 p-5 bg-base-200 rounded-xl'>
                    <div className='flex justify-center mt-5 mb-5 '>
                        <h1 className='text-2xl'>Create Result</h1>
                    </div>
                    <form onSubmit={handleSubmit(handleAddResult)}>

                        <div className='grid grid-cols-3 gap-3'>

                            <div className=''>
                                <label className="label"> <span className="label-text">Enter Student-Code</span></label>

                                <select className="w-full max-w-xs select select-bordered rounded-xl" {...register("studentCode")}>
                                    {sortedStudents.map(getCode => (
                                        <option key={getCode?.studentCode}>
                                            {getCode?.studentCode}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter Student name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="sudent name..." />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter physics marks</span></label>
                                <input type="number" {...register("physics", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="physics marks..." />
                                {errors.physics && <p className='text-red-500'>{errors.physics.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter chemistry marks</span></label>
                                <input type="number" {...register("chemistry", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="chemistry marks..." />
                                {errors.chemistry && <p className='text-red-500'>{errors.chemistry.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter biology marks</span></label>
                                <input type="number" {...register("biology", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="biology marks..." />
                                {errors.biology && <p className='text-red-500'>{errors.biology.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter Mathematics marks</span></label>
                                <input type="number" {...register("math", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="Mathematics marks..." />
                                {errors.math && <p className='text-red-500'>{errors.math.message}</p>}
                            </div>

                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter bangla marks</span></label>
                                <input type="number" {...register("bangla", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="bangla marks..." />
                                {errors.bangla && <p className='text-red-500'>{errors.bangla.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter english marks</span></label>
                                <input type="number" {...register("english", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="english marks..." />
                                {errors.english && <p className='text-red-500'>{errors.english.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter english marks</span></label>
                                <input type="number" {...register("english", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="english marks..." />
                                {errors.english && <p className='text-red-500'>{errors.english.message}</p>}
                            </div>
                            <div className="w-full max-w-xs form-control">
                                <label className="label"> <span className="label-text">Enter history marks</span></label>
                                <input type="number" {...register("history", {
                                    required: "Required"
                                })} className="w-full max-w-xs input input-bordered rounded-xl" placeholder="history marks..." />
                                {errors.history && <p className='text-red-500'>{errors.history.message}</p>}
                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <input className='p-2 mt-4 text-black bg-gray-300 w-80 btn rounded-2xl' value="submit" type="submit" />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}
