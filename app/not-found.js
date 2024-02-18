import Link from 'next/link'
import { RiEmotionSadFill } from "react-icons/ri";


export default function NotFound() {
  return (
    <div className='flex justify-center'>
      <div>
      <h2 className='text-9xl'><RiEmotionSadFill /></h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}