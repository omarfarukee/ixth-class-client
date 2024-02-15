"use client"
import React, { useEffect, useState } from 'react'
import getAllResults from '../lib/getStudentResults';
import { FaEdit } from 'react-icons/fa';
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
export default function ResultSheet() {
    const [allResults, setAllResults] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllResults();
                const sortedResults = result.data.sort((a, b) => {
                    return a.studentCode.localeCompare(b.studentCode);
                });
                setAllResults(sortedResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const [resultDelete, setResultDelete] = useState([])
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, want to delete this student?')
        if(proceed){
            fetch( `http://localhost:5000/result/delete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('result deleted')
                    const remaining = resultDelete.filter(item => item._id !== id)
                    setResultDelete(remaining)
                    location.reload()
                }
                else{
                    toast.error('result is not deleted')
                }
            })
        }
}
    return (
        <div className='p-5'>
            <div className='flex justify-center text-2xl border-b-2'>
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
                            <th>english</th>
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
                                    <td><span className='font-bold'>{result?.english}</span>/100</td>
                                    <td><span className='font-bold'>{result?.history}</span>/100</td>
                                    <td><span className='font-bold'>{result?.totalMarks}</span>/700</td>
                                    <td><span className='font-bold'>{result?.gpa}</span>/5.0</td>
                                    <td><span className='font-bold'>{result?.grade}</span></td>
                                    <td><Link href={`/resultSheet/${result?._id}`}><button className='hover:text-blue-400'><FaEdit className='text-lg'></FaEdit></button></Link></td>
                                    <td><button onClick={() => handleDelete(result?._id)}><MdDelete className='text-lg hover:text-red-500' /></button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
