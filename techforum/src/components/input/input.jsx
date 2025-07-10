import React from 'react'
import { FaRegEye } from "react-icons/fa";

const Input = ({name,placeholder,focus,Type}) => {
  return (
    <div>
      <div className='flex flex-col gap-[5px]'>
        
        <input 
        placeholder={placeholder}
        autoFocus={focus}
        type={Type?'text':'password'}
        className='
        bg-4/50 border border-white/10 text-white font-medium text-[14px]
        focus:outline-none focus:border-white/50 focus:transition-colors placeholder:text-[14px] placeholder:font-light p-[10px] w-full rounded-[8px]
         '>
          
        </input>
      </div>
    </div>
  )
}

export default Input
