/* eslint-disable @next/next/no-async-client-component */

'use client'
import getSingleResult from '@/app/lib/getSingleResult'
import React from 'react'
import { useForm } from 'react-hook-form';


export default async function EditResult({params}) {
    const { register, handleSubmit } = useForm();
    const {id}= params
    const result =await getSingleResult(id)
    
    const handleUpdateResult = async (data) => {

        const marks = {
            name: parseInt(data.name) || result?.name,
            physics:  parseInt(data.physics)|| result?.physics,
            chemistry: parseInt(data.chemistry) || result?.chemistry ,
            biology: parseInt(data.biology) || result?.biology,
            math:  parseInt(data.math) || result?.math ,
            bangla:  parseInt(data.bangla) || result?.bangla,
            english:  parseInt(data.english) || result?.english,
            history:  parseInt(data.history)|| result?.history
        }
console.log(marks)
    }
  return (
    <div>
        <div className='flex justify-center mt-5 mb-5 text-2xl'>
            <h1>Student Marks edit</h1>
        </div>
         <form onSubmit={handleSubmit(handleUpdateResult)}>
                <div className="">
                    <div className="flex justify-center p-5">
                    <div className='grid grid-cols-3 gap-10 p-2'>
                        <div className="max-w-xs form-control">
                            <label className="label"> <span className="label-text">Student Code</span></label>
                            <input
                                type="text"
                                placeholder="student code"
                                {...register("studetnCode", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.studentCode}
                                disabled
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">Student Name</span></label>
                            <input
                                type="text"
                                placeholder="name"
                                {...register("name", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.name}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">physics marks</span></label>
                            <input
                                type="text"
                                placeholder="physics marks..."
                                {...register("physics", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.physics}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">chemistry marks</span></label>
                            <input
                                type="text"
                                placeholder="chemistry "
                                {...register("chemistry", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.chemistry}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">biology marks</span></label>
                            <input
                                type="text"
                                placeholder="biology marks"
                                {...register("biology", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.biology}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">math marks</span></label>
                            <input
                                type="text"
                                placeholder="math marks"
                                {...register("math", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.math}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">bangla marks</span></label>
                            <input
                                type="text"
                                placeholder="bangla marks"
                                {...register("bangla", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.bangla}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">english marks</span></label>
                            <input
                                type="text"
                                placeholder="english marks"
                                {...register("english", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.english}
                            />
                        </div>
                        <div className="w-full max-w-xs form-control">
                            <label className="label"> <span className="label-text">history </span></label>
                            <input
                                type="text"
                                placeholder="history"
                                {...register("history", {})}
                                className="w-full max-w-xs input input-bordered rounded-3xl"
                                defaultValue={result?.history}
                            />
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
