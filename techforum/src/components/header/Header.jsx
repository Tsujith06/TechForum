import React, { useState } from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import { useNavigate } from 'react-router'
import { routes } from '../../router'

const Header = ({index,handleindex}) => {
  const routes=useNavigate();
  return (
    <div className='h-[80px] relative font-poppins'>
        <div className='h-[80px] bg-7/10 blur-[20px] w-full'/>
        <div className='absolute inset-0 flex items-center gap-96 px-[50px]'>
            <div className='text-[18px]'>
              <Logo /> 
            </div>
            <ul className='flex decoration-0 gap-[30px] text-white justify-center ml-auto items-center '>
                <li className='cursor-pointer' onClick={()=>routes('/home')}>Home</li>
                <li  className='cursor-pointer' onClick={()=>routes('/aboutus')}>About us</li>
                <li className='cursor-pointer' onClick={()=>routes('/team')} >Team</li>
                <li className='cursor-pointer' onClick={()=>routes('/activity')}>Activities</li>
                <Button  name={'Contact us'} onClick={()=>routes('/contact')} />
            </ul>
        </div>
    </div>
    
  )
}

export default Header
