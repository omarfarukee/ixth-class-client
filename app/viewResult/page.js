/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
'use client'
import React, { useEffect, useState } from 'react';
import getAllResults from '../lib/getStudentResults';
import { IoSettingsOutline } from "react-icons/io5";
import PrivateRoute from '../Components/page';

export default function ViewResult() {

    const [allResults, setAllResults] = useState([]);
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const userData = sessionStorage.getItem('studentData');
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setStudentData(parsedUserData);
        }
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllResults();
                const sortedResults = result.data.sort((a, b) => {

                    if (a.gpa !== b.gpa) {
                        return b.gpa - a.gpa;
                    } else {

                        return b.totalMarks - a.totalMarks
                    }
                });

                setAllResults(sortedResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const code = allResults.map(result => result?.studentCode)
    const checksRsultExists = (studentData && code.includes(studentData?.studentCode))

    return (
        <PrivateRoute>
            <div className='p-5'>
                {!checksRsultExists ?
                    <marquee direction="left" className="font-bold text-blue-700">
                        The Result will be published soon ...
                    </marquee>
                    : <marquee direction="left" className="font-bold text-blue-700">
                        Congratulations to those who did well in the exam. But those who didn't do well won't be so upset.Because one exam does not decide your future.Work hard with honesty and one day you will see success
                    </marquee>}
                <div className='flex justify-center text-2xl border-b-2'>
                    <h1>Result</h1>
                </div>
                {checksRsultExists ? <></> : <p className='flex items-center justify-center mt-10 text-3xl font-bold'><IoSettingsOutline className="font-bold text-red-700 text-7xl animate-spin" />
                    working on progress<span className='animate-pulse'>........</span></p>}
                <div>
                    {
                        allResults.map((result, index) =>

                            <div>
                                <div className={result?.studentCode === studentData?.studentCode ? 'flex justify-center' : 'hidden'}>
                                    <div className='mt-3 mb-3 bg-gray-100 border w-54 h-96'>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>name</p>
                                        <p className='flex items-center justify-center h-48'>{result?.name}</p>
                                    </div>
                                    <div className='mt-3 mb-3 border h-96'>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Code</p>
                                        <p className='flex items-center justify-center h-48 font-bold'>{result?.studentCode}</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 bg-gray-100 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Physics</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.physics}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Physics</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.chemistry}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 bg-gray-100 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Biology</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.biology}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Math</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.math}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 bg-gray-100 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Bangla</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.bangla}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>English</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.english}</span>/100</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 bg-gray-100 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>History</p>
                                        <p className='flex items-center justify-center h-48'><span className='font-bold'>{result?.history}</span>/100</p>
                                    </div>
                                    <div className='mt-3 mb-3 border w-28 h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Total Marks</p>
                                        <p className='flex items-center justify-center h-48 '><span className='font-bold'>{result?.totalMarks}</span>/700</p>
                                    </div>
                                    <div className='w-24 mt-3 mb-3 bg-gray-100 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>GPA</p>
                                        <p className='flex items-center justify-center h-48 text-2xl'><span className='font-bold'>{result?.gpa}</span>/5.0</p>
                                    </div>
                                    <div className='w-16 mt-3 mb-3 border h-96 '>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Grade</p>
                                        <p className='flex items-center justify-center h-48 text-2xl'><span className='font-bold'>{result?.grade}</span></p>
                                    </div>
                                    <div className='mt-3 mb-3 bg-gray-100 border w-28 h-96'>
                                        <p className='flex justify-center p-2 font-bold bg-gray-200'>Position</p>
                                        <p className='flex items-center justify-center h-48 text-2xl'><span className='font-bold'>{index + 1}
                                            {getOrdinalSuffix(index)}</span></p>
                                    </div>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </PrivateRoute>
    );
}

function getOrdinalSuffix(index) {
    if (index === 0) return <small>st</small>;
    if (index === 1) return <small>nd</small>;
    if (index === 2) return <small>rd</small>;
    return <small>th</small>;
}