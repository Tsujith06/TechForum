import React from 'react'

const Rounddetails = () => {
  return (
    <div>
      <div className='flex gap-1 rounded-[5px] overflow-hidden'>
            <div className='flex flex-col gap-1 justify-center items-center h-auto w-[80px] p-2 bg-3/40 border-[2px] rounded-tl-[5px] rounded-bl-[5px] border-white/20'>
                <p className='text-white text-[14px]'>July 15</p>
                <p className='text-white text-[14px]'>9:00 AM</p>
            </div>
             <div className='flex flex-col gap-1 justify-center h-auto w-full p-2 bg-3/40 border-[2px]  border-white/20 rounded-tr-[5px] rounded-br-[5px]'>
                <p className='text-[14px] text-1 font-medium '>Qualifier Round</p>
                <p className='text-white text-[14px]'>This round will be one-on-one match. This round will be based on the following scoring criteria: AGGRESSION, CONTROL, DAMAGE, STRATEGY. Points will be given accordingly to both the combatants. Time of combat is 4 minutes.</p>
            </div>
        </div>
    </div>
  )
}

export default Rounddetails
