'use client'
import React, { useEffect, useState } from 'react'
import getAllStudent from '../lib/getAllStudents'
import { useForm } from 'react-hook-form';
export default function CreateResult() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [allStudentsInfo, setAllStudentsInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllStudent();
                setAllStudentsInfo(result.data); // Assuming data is the key containing student array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getStudentCodes = allStudentsInfo.map(getCode => getCode?.studentCode)
    console.log(getStudentCodes)
    const handleAddResult = (data) => {
        const studentsInfo = {
            physics: data.physics,
            studentCode: data.studentCode || '001'
        }
        console.log(studentsInfo)
    }

    return (
        <div>
            <div className='flex justify-center mt-5 mb-5 '>
                <h1 className='text-2xl'>Create Result</h1>
            </div>s
            <form onSubmit={handleSubmit(handleAddResult)}>

                <div className='flex justify-evenly'>
                    <div>
                        <div className=''>
                            <label className="label"> <span className="label-text">Enter Student-Code</span></label>
                            <select className="w-full max-w-xs select select-bordered rounded-xl" {...register("studentCode")}>
                                {
                                    allStudentsInfo.map(getCode => <option key={getCode?.studentCode}>{getCode?.studentCode}</option>)
                                }
                            </select>
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
                    </div>
                    <div>
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
                </div>
                <div className='flex justify-center'>
                    <input className='mt-4 btn btn-success ' value="add this" type="submit" />
                </div>

            </form>
        </div>
    )
}
