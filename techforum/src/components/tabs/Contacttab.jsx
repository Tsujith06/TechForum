import React from 'react'
import Contactdetail from '../contactDetails/Contactdetail'

const Contacttab = () => {
  return (
    <div className='flex gap-3 h-auto w-[780px] overflow-y-auto' style={{scrollbarWidth:"none"}}>
      <Contactdetail/>
      <Contactdetail/>
      <Contactdetail/>
    </div>
  )
}

export default Contacttab
