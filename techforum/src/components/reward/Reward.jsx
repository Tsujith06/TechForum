import React from 'react'
import { Rewardicon } from '../../icon';

const Reward = () => {
  return (
    <div className='h-[155px] w-[150px] flex flex-col gap-[15px] text-1 items-center justify-center bg-3/40 border-[2px] rounded-[8px] border-white/20' >
      <p className='text-white text-[16px] font-medium '>Round 1</p>
      <Rewardicon/>
      <p className='font-medium text-white'>300 RP</p>
    </div>
  )
}

export default Reward
