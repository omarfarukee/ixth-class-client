/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react';
import getAllResults from '../lib/getStudentResults';
import { IoSettingsOutline } from "react-icons/io5";
import NameOfExamGet from '../nameOfExam/page';

export default function FinalResultSheet() {
    const [allResults, setAllResults] = useState([]);
    const [gpaZeroCount, setGpaZeroCount] = useState(0);
    const [gpaHigherThanZeroCount, setGpaHigherThanZeroCount] = useState(0);

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
                let zeroCount = 0;
                let higherThanZeroCount = 0;
                sortedResults.forEach(result => {
                    if (result.gpa === 0) {
                        zeroCount++;
                    } else {
                        higherThanZeroCount++;
                    }
                });

                setGpaZeroCount(zeroCount);
                setGpaHigherThanZeroCount(higherThanZeroCount);
                setAllResults(sortedResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const total = (gpaZeroCount + gpaHigherThanZeroCount)
    return (
        <div className='p-5'>
            {allResults ? 
            <marquee direction="left" className="font-bold text-blue-700">
                Congratulations to those who did well in the exam. But those who didn't do well won't be so upset.Because one exam does not decide your future.Work hard with honesty and one day you will see success. 
            </marquee>:
            <marquee  direction="left" className="font-bold text-blue-700">
                s The Result will be published soon ... 
            </marquee>
            }
            <div className='flex justify-center text-2xl border-b-2'>
                <h1>Result-Sheet</h1>
            </div>
            <div>
         <div className='flex justify-center border-b-2'>
            <div className='flex gap-10 mt-3 mb-2'>
                <NameOfExamGet/>
                <p className='font-bold text-blue-700'>Total Student : {total}</p>
                <p className='font-bold text-green-600'>The number of Student Pass: {gpaHigherThanZeroCount}</p>
                <p className='font-bold text-red-500'>The number of Student Fail: {gpaZeroCount}</p>
              
            </div>
            </div>
            </div>
            { allResults? 
            <div className="overflow-x-auto">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Code</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th>Biology</th>
                            <th>Math</th>
                            <th>Bangla</th>
                            <th>English</th>
                            <th>History</th>
                            <th>Total Marks</th>
                            <th>GPA</th>
                            <th>Grade</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allResults.map((result, index) => (
                            <tr key={result?._id} className={getBackgroundColor(result, index)}>
                                <th>{result?.name}</th>
                                <td><span className='font-bold'>{result?.studentCode}</span></td>
                                <td><span className='font-bold'>{result?.physics}</span>/100</td>
                                <td><span className='font-bold'>{result?.chemistry}</span>/100</td>
                                <td><span className='font-bold'>{result?.biology}</span>/100</td>
                                <td><span className='font-bold'>{result?.math}</span>/100</td>
                                <td><span className='font-bold'>{result?.bangla}</span>/100</td>
                                <td><span className='font-bold'>{result?.english}</span>/100</td>
                                <td><span className='font-bold'>{result?.history}</span>/100</td>
                                <td><span className='font-bold'>{result?.totalMarks}</span>/700</td>
                                <td><span className='font-bold'>{result?.gpa}</span>/5.0</td>
                                <td><span className='font-bold'>{result?.grade}</span></td>
                                <td>
                                    <span className='font-bold'>
                                        {index + 1}
                                        {getOrdinalSuffix(index)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>:<p className='flex items-center justify-center mt-10 text-3xl font-bold'><IoSettingsOutline className="font-bold text-red-700 text-7xl animate-spin" />
                working on progress<span className='animate-pulse'>........</span></p>
            }
        </div>
    );
}

function getBackgroundColor(result, index) {
    if (result?.gpa === 0) {
        return 'bg-red-400';
    } else {
        switch (index) {
            case 0:
                return 'bg-green-500';
            case 1:
                return 'bg-green-400';
            case 2:
                return 'bg-green-300';
            default:
                return '';
        }
    }
}

function getOrdinalSuffix(index) {
    if (index === 0) return <small>st</small>;
    if (index === 1) return <small>nd</small>;
    if (index === 2) return <small>rd</small>;
    return <small>th</small>;
}
