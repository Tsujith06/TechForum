import React from 'react';
import eventimg from "../../assets/eventimg1.png";
const SignatureEventCard = () => {
  return (
    <div className='h-[306px] w-[1248px] p-5 bg-3/40 border border-white/20 rounded-[10px]'>
      <img src={eventimg} alt="" className='h-full w-auto' />
      <p className='text-white'>Code</p>
    </div>
  )
}

export default SignatureEventCard
