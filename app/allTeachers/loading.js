import React from 'react'
import { IoIosSettings } from "react-icons/io";


export default function loading() {
  return (
    <div className='flex items-center justify-center mt-5'>
    <IoIosSettings  className='text-gray-700 text-8xl animate-spin' />
    </div>
  )
}