import React from 'react'

const TeamCard = ({src,name,role}) => {
  return (
    <div>
        <div className='flex flex-col cursor-pointer h-[320px] m-5 font-poppins w-[250px] p-[10px] overflow-hidden bg-gradient-to-b from-2/30 to-8/30 rounded-br-[20px] rounded-tl-[20px] border border-white/50'>
           <div className='flex flex-col w-full'>
               <p className='text-[16px] text-white w-full'>{name}</p>
               <p className='text-[14px] text-white/50 '>{role}</p>
           </div>
          <div className=' h-full  flex justify-center mt-1'><img src={src} className='bg-cover'/></div>
        </div>
    </div>
  )
}

export default TeamCard
