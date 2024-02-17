"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function UpdateExamName({params}) {
    const router = useRouter()
    const {id} = params;
    console.log(id)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleUpdateExamName =async (data) => {
        const exam = {
            exam_name: data.exam_name,
            date: data.date
        }
       console.log(exam)
       const response = await fetch(`http://localhost:5000/examName/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(exam),
    });
    const responseData = await response.json();
    console.log(responseData)
    if(responseData.message ==='Updated successfully'){
        toast.success(responseData.message);
        router.push('/resultSheet')
    }
    }

  return (
    <div className='flex justify-center mt-10'>
      <div className='p-2 bg-base-200 rounded-xl w-96'>
      <div className='flex justify-center mt-5'>
          <h1 className='text-2xl'>Update Exam Name Or date</h1>
      </div>
      <form onSubmit={handleSubmit( handleUpdateExamName)}>
          <div className="w-full max-w-xs form-control">
              <label className="label"> <span className="label-text">Select Exam Name</span></label>
              <select {...register("exam_name", {
                  required: "Required"
              })} className="w-full max-w-xs select select-bordered rounded-xl">
                  <option value="">Select an exam name</option>
                  <option value="First Term">First Term</option>
                  <option value="Second Term ">Second Term</option>
                  <option value="Pre Test">Pre Test</option>
                  <option value="Test">Test</option>
                  <option value="Final">Final</option>
              </select>
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          {/* Date input field */}
          <div className="w-full max-w-xs form-control">
              <label className="label"> <span className="label-text">Select Date</span></label>
              <input type="date" {...register("date", {
                  required: "Required"
              })} className="w-full max-w-xs input input-bordered rounded-xl" />
              {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
          </div>
          <div className='flex justify-center'>
              <input className='p-2 mt-4 text-black bg-gray-300 w-36 btn rounded-2xl' value="Submit" type="submit" />
          </div>
      </form>
  </div>
</div>
  )
}
