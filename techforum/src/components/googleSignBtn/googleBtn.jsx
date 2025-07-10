import React from 'react'
import { FcGoogle } from "react-icons/fc";
const GoogleBtn = () => {
  return (
      <div >
        <button className='w-full cursor-pointer gap-[10px] bg-4/30 text-white p-[10px] rounded-[8px] border border-white/50 flex justify-center items-center '>
          <FcGoogle className='h-[20px] w-[20px]'/>
          Sign in with google
        </button>
        
      </div>
  )
}

export default GoogleBtn
