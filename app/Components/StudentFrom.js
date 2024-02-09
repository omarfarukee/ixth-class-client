// 'use client'

// import React from 'react'
// import { useForm } from 'react-hook-form';
// export default function StudentForm() {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data); // Form data is submitted here
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("name", { required: true })} placeholder="Name" />
//                 {errors.name && <p>Name is required</p>}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
