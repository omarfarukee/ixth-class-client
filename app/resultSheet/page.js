import React, { useEffect, useState } from 'react'
import getAllResults from '../lib/GetStudentResults';

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

    console.log(allResults)

    return (
        <div className='p-5 bg-base-200'>
            <div className='flex justify-center text-2xl'>
                <h1>ResultSheet</h1>
            </div>
            {
                allResults.map(result => 
                    <div key={result?._id}>
                        {result?.physics}
                    </div>
                    )
            }
        </div>
    )
}
