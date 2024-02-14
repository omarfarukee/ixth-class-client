/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import getSingleStudentDetails from '@/app/lib/getSignleStudentData'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default async function StudentDetails({ params }) {
    const { id } = params
    const getStudentData = await getSingleStudentDetails(id)
    return (
        <div className='p-5'>
            <div >
                <div className='flex justify-center w-full p-5 shadow-lg bg-base-200 rounded-xl'>{getStudentData?.image === '' ? <p className='text-[240px]'><FaUserCircle></FaUserCircle></p> : <img alt='' className='rounded-full w-60 h-60 ring ring-primary' src={getStudentData?.image} />}
                </div>
                <div className='mb-10 f'>
                    <div className='grid grid-cols-3 gap-3'>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Name:
                        <span className='flex gap-2'><p>{getStudentData?.first_name}</p>
                            <p>{getStudentData?.last_name}</p></span>
                    </div>
                    {getStudentData?.studentCode && <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Student Code:
                        <span className='flex gap-2'><p>{getStudentData?.studentCode}</p>
                        </span>
                    </div>}
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Class:
                        <span className='flex gap-2'>
                            <p>IX (Science)</p></span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Father's Name:
                        <span className='flex gap-2'><p>{getStudentData?.fathers_name}</p>
                        </span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Mother's Name:
                        <span className='flex gap-2'><p></p>
                            <p>{getStudentData?.mothers_name}</p></span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Address:
                        <span className='flex gap-2'><p></p>
                            <p>{getStudentData?.address}</p></span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Blod Group:
                        <span className='flex gap-2'>
                            <p>{getStudentData?.blod_group}</p></span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Gender:
                        <span className='flex gap-2'>
                            <p>{getStudentData?.gender}</p></span>
                    </div>
                    <div className='flex gap-2 p-3 mt-2 font-bold rounded-lg shadow-xl bg-slate-300'>
                        Phone Number:
                        <span className='flex gap-2'>
                            <p>{getStudentData?.contact}</p></span>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
