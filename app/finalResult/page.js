'use client'
import React, { useEffect, useState } from 'react';
import getAllResults from '../lib/getStudentResults';

export default function FinalResultSheet() {
    const [allResults, setAllResults] = useState([]);

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

    return (
        <div className='p-5'>
            <div className='flex justify-center text-2xl border-b-2'>
                <h1>ResultSheet</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
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
                            <tr key={result?._id} className={getBackgroundColor(index)}>
                                <th>{result?.name}</th>
                                <td><span className=''>{result?.studentCode}</span></td>
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
            </div>
        </div>
    );
}

function getBackgroundColor(index) {
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

function getOrdinalSuffix(index) {
    if (index === 0) return <small>st</small>;
    if (index === 1) return <small>nd</small>;
    if (index === 2) return <small>rd</small>;
    return <small>th</small>;
}
