import React from 'react'
import illustration from '../../assets/EventsIllusration.png'

const Eventtype = () => {
  return (
    <div className='relative h-fit flex gap-[50px] w-fit border border-white/20 rounded-[10px]'>
      <div className='absolute flex flex-col h-full '>
          <p className='text-white text-[18px] ml-[15px] mt-[10px]'>Events</p>
          <p className='text-5 text-[50px] ml-[30px]'>50</p>
      </div>
      <div className='absolute'><img src={illustration} alt="" className=' h-[130px] mt-[20px] w-auto ' /></div>
    </div>
  )
}

export default Eventtype
