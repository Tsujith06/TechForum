import React from 'react';
import eventimg from "../../assets/eventimg1.png";
import Button from '../button/button';
const SignatureEventCard2 = ({name}) => {
  return (
    <div className='h-[306px] w-[1248px] p-[30px] bg-3/40 border-[2px] border-white/20 rounded-[10px]'>
      <div className='flex h-full w-full items-center '>
        
        <div className='flex flex-col ml-auto  h-full w-auto gap-[30px] justify-center'>
          <div className='flex flex-col gap-[15px]'>
            <p className='text-white text-[20px] font-medium'>{name}</p>
            <p className='w-[775px] text-white/60 text-[16px]'>A 24-hour coding sprint where teams compete to solve real-world problems using logic, innovation, and code. With problem statements ranging from AI to web development, CodeStorm tests your coding skills under pressure. Winners earn recognition, cash prizes, and internship opportunities.</p>
          </div>
          <div className='w-[140px]'><Button name={'Visit'}/></div>
        </div>
        <img src={eventimg} alt="" className='h-full w-auto ml-auto' />
      </div>
    </div>
  )
}

export default SignatureEventCard2
