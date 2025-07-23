import React from 'react'
import Rounddetails from '../roundDetails/Rounddetails'

const Rounds = () => {
  return (
    <div className='h-full w-[780px] overflow-y-auto flex flex-col gap-[5px]' style={{scrollbarWidth:"none"}}>
        <Rounddetails/>
        <Rounddetails/>
        <Rounddetails/>
    </div>
  )
}

export default Rounds
