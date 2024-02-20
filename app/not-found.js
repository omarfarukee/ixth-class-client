import Link from 'next/link'
import { RiEmotionSadFill } from "react-icons/ri";


export default function NotFound() {
  return (
    <div className='flex justify-center mb-28'>
      <div className='mt-20'>
      <h2 className='flex justify-center text-[200px] text-red-700 animated-bounci'><RiEmotionSadFill /></h2>
      <p className='text-3xl font-bold'>Could not find the page you requested</p>
      <Link href="/"><p className='flex justify-center p-2 mt-5 font-bold shadow-lg bg-base-200 rounded-xl'>Return Home</p></Link>
      </div>
    </div>
  )
}