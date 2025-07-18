import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import Button from '../button/button';
import guestlucture from '../../assets/guestlucture.png'
const Eventboard = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
        <div className='w-full h-[1px] bg-9'></div>
        <div className='h-auto  w-full flex pl-5 pr-5'> 
            <div className='flex gap-[80px]'>
                <div className='flex gap-0 flex-col h-full w-[24px] justify-center items-center'>
                    <div className='w-[3px] h-full rounded-2xl bg-1'></div>
                    <FaChevronDown className='h-[24px] w-auto text-1' />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex  items-center h-fit  gap-3'>
                        <p className='text-white text-[18px]'>July 14 - July 15 , 2025</p>
                        <div className='h-2 w-2 bg-1 rounded-[5px]'></div>
                        <p className='text-white text-[18px] '>BIT Main Auditorium </p>
                    </div>
                    <p className='text-[68px] font-medium text-white '>GUEST LUCTURE</p>
                    <div className='flex flex-col gap-[50px]'>
                        <p className='text-white/50 w-[660px]'>Join us for a guest lecture at the BIT Main Auditorium on July 14–15, 2025, from 9:00 AM to 4:30 PM. Register on or before July 10 to reserve your spot and gain insights from industry experts!</p>
                        <div className='w-[200px]'><Button name={'Register Now'}/></div>
                    </div>
                </div>
            </div>

            <div className=' h-[450px] w-[400px] rounded-[20px] overflow-hidden ml-auto bg-3 '>
                <img src={guestlucture} alt="" className='bg-contain h-full w-full  ' />
            </div>

        </div>
        <div className='w-full h-[1px] bg-9'></div>
    </div>
  )
}

export default Eventboard
