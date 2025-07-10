import React, { useState } from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import { useNavigate } from 'react-router'
import { routes } from '../../router'

const Header = ({index,handleindex}) => {
  const handleClick=(route,index)=>{
    handleindex(index);
    routes(route)
  }
  const routes=useNavigate();
  return (
    <div className='h-[80px] relative '>
        <div className='h-[80px] bg-7/10 blur-[20px] w-full'/>
        <div className='absolute inset-0 flex items-center gap-96 px-[50px]'>
            <div className='text-[18px]'>
              <Logo /> 
            </div>
            <ul className='flex decoration-0 gap-[30px] text-white justify-center ml-auto items-center '>
                <li className={`cursor-pointer ${index===0 && "text-1"}`} onClick={()=> handleClick('/home',0)}>Home</li>
                <li className={`cursor-pointer ${index===1 && "text-1"}`} onClick={()=> handleClick('/aboutus',1)}>About us</li>
                <li>Team</li>
                <li>Activities</li>
                <Button name={'Contact us'} />
            </ul>
        </div>
    </div>
    
  )
}

export default Header
