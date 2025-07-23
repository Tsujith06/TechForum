import React from 'react'
import illustration from '../../assets/EventsIllusration.png'

const Eventtype = ({e_name,e_count,setactive,active,t}) => {
  return (
    <button className={`bg-10 h-fit flex cursor-pointer gap-[50px] w-fit border-[2px]  rounded-[10px] overflow-hidden ${active===t?"border-1":"border-white/20"}`} onClick={()=>setactive(e_name)}>

      <div className=' flex flex-col h-full '>
          <p className='text-white text-[20px] ml-[15px] mt-[10px]'>{e_name}</p>
          <p className='text-5 text-[50px] ml-[30px]  h-full mt-2 '>{e_count}</p>
      </div>
      <img src={illustration} alt="" className='h-[130px] mt-[20px] w-auto ' />
    </button>
  )
}

export default Eventtype
