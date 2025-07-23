import React from 'react'
import Reward from '../reward/Reward'

const Rewards = () => {
  return (
    <div className='flex gap-3 h-auto w-[780px] overflow-y-auto' style={{scrollbarWidth:"none"}}>
      <Reward/>
      <Reward/>
      <Reward/>
    </div>
  )
}

export default Rewards
