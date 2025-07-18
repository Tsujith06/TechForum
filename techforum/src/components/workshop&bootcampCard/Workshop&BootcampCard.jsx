import React from 'react'
import Code_icon from '../code-icon/Code-icon'
import Button from '../button/button'

const WorkshopBootcampCard = ({name,des,icon}) => {
  return (
    <div className='h-auto w-auto p-5 bg-3/40 border-[2px] border-white/20 rounded-[10px] flex flex-col gap-[30px]  '>
      <div className='flex flex-col gap-5 '>
        {icon}
        <div className='flex flex-col gap-1'>
          <p className='font-medium text-white text-[18px]'>{name}</p>
          <p className='font-normal text-white/50 text-[16px] w-[564px]'>
          {des}
            </p>
        </div>
      </div>
      <div className='w-[135px]'><Button name={'Visit'}/></div>
    </div>
  )
}

export default WorkshopBootcampCard
