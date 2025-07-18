import React from 'react';
import lecture from '../../assets/lecture.png'
import Button from '../button/button';
import { FiClock } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa6";
const GuestLucture = () => {
 return (
    <div className='h-auto w-[1248px] p-[30px] bg-3/40 border-[2px] border-white/20 rounded-[10px] '>
      <div className='flex h-full w-full gap-6  items-center '>
        <img src={lecture} alt="" className='h-full w-full' />
        <div className='flex flex-col ml-auto  h-full w-auto gap-[20px] justify-center'>
          <div className='flex flex-col gap-0'>
            <p className='text-white text-[20px] font-medium'>Dr. PRIYA SHARMA</p>
            <p className='w-[775px] text-1 text-[16px]'>AI Research Scientist, Google</p>
          </div>
          <div className='flex flex-col gap-0'>
            <p className='w-auto text-1 text-[16px]'>"Navigating the Future with Cloud & AI Integration"</p>
            <p className='text-white/80 text-[16px] font-normal w-auto'>Join us for an enlightening session where Dr. Raj explores the evolving synergy between Cloud Computing and Artificial Intelligence. Learn how scalable infrastructure powers intelligent solutions, and discover real-world use cases in smart cities, finance, and education.</p>
          </div>
        
            <div className='flex gap-[20px]'>
                <p className='text-white flex justify-center items-center gap-2'><FiClock className='text-white h-5 w-5' /> 45 min</p>
                <div className='h-full w-[2px] bg-white'></div>
                <p className='text-white flex justify-center items-center gap-2'><FaRegCalendar  className='text-white h-5 w-5' />  July 15, 2025</p>
            </div>
          <div className='w-[140px]'><Button name={'Join Now'}/></div>
        </div>
        
      </div>
    </div>
  )
}

export default GuestLucture
