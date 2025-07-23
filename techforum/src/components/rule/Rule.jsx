import React from 'react'

const Rule = () => {
  return (
    <div>
      <div className='flex gap-1 rounded-[5px] overflow-hidden'>
            <div className='flex flex-row h-auto w-[150px] justify-center p-2 bg-3/40 border-[2px] rounded-tl-[5px] rounded-bl-[5px] border-white/20'>
                <p className=' text-[14px] text-1 w-auto '>Team Size</p>
            </div>
             <div className='flex flex-col gap-1 justify-center h-auto w-full p-2 bg-3/40 border-[2px]  border-white/20 rounded-tr-[5px] rounded-br-[5px]'>
                <p className='text-white text-[14px]'>Teams can have up to 5 members.</p>
            </div>
        </div>
    </div>
  )
}

export default Rule
