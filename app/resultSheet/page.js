"use client"
import React, { useEffect, useState } from 'react'
import getAllResults from '../lib/getStudentResults';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

export default function ResultSheet() {
    const [allResults, setAllResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllResults();
                setAllResults(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-10'>
            <div className='flex justify-center mb-10 text-2xl border-b-2'>
                <h1>ResultSheet</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Studetn Name</th>
                            <th>Student Code</th>
                            <th>Physics</th>
                            <th>Chemestry</th>
                            <th>biology</th>
                            <th>Math</th>
                            <th>Bangla</th>
                            <th>history</th>
                            <th>Total Marks</th>
                            <th>GPA</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allResults.map(result =>
                                <tr key={result?._id}>
                                    <th>{result?.name}</th>
                                    <td><span className='font-bold'>{result?.studentCode}</span></td>
                                    <td><span className='font-bold'>{result?.physics}</span>/100</td>
                                    <td><span className='font-bold'>{result?.chemistry}</span>/100</td>
                                    <td><span className='font-bold'>{result?.biology}</span>/100</td>
                                    <td><span className='font-bold'>{result?.math}</span>/100</td>
                                    <td><span className='font-bold'>{result?.bangla}</span>/100</td>
                                    <td><span className='font-bold'>{result?.history}</span>/100</td>
                                    <td><span className='font-bold'>{result?.totalMarks}</span>/700</td>
                                    <td><span className='font-bold'>{result?.gpa}</span>/5.0</td>
                                    <td><span className='font-bold'>{result?.grade}</span></td>
                                    <td><Link href={`/result/${result?._id}`}><button ><FaEdit></FaEdit></button></Link></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
