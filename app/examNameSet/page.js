'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function ExamNameSet() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddResultName = async (data) => {
       
        const exam = {
            exam_name: data.exam_name,
            date: data.date
        }
       console.log(exam)
    }

    return (
      <div className='p-5 bg-base-200 rounded-xl'>
      <div className='flex justify-center mt-5'>
          <h1 className='text-2xl'>Exam Name</h1>
      </div>
      <form onSubmit={handleSubmit(handleAddResultName)}>
          <div className="w-full max-w-xs form-control">
              <label className="label"> <span className="label-text">Select Exam Name</span></label>
              <select {...register("exam_name", {
                  required: "Required"
              })} className="w-full max-w-xs select select-bordered rounded-xl">
                  <option value="">Select an exam name</option>
                  <option value="first_term">First Term</option>
                  <option value="second_term">Second Term</option>
                  <option value="finale">Final</option>
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
              <input className='p-2 mt-4 text-black bg-gray-300 w-80 btn rounded-2xl' value="Submit" type="submit" />
          </div>
      </form>
  </div>
    )
}
