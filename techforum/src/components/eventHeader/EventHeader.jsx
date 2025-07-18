import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


const EventHeader = () => {
  return (
    <div className='w-full  h-auto flex flex-col gap-[15px]'>
      <div className='flex  h-auto w-auto items-center gap-5'>
        <div className='p-2 border border-white/50 rounded-[100px] flex justify-center items-center'><IoIosArrowBack className='text-white h-6 w-auto  flex justify-center items-center'/></div>
        <p className='text-white text-[18px] font-semibold'>CODESTROM</p>
      </div>
      
    </div>
  )
}

export default EventHeader
