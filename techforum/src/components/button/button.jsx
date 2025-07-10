import React from 'react'

const Button = ({name,onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='w-full cursor-pointer p-[10px] bg-gradient-to-r from-6 to-5 rounded-[8px] text-white font-medium' >{name}</button>
    </div>
  )
}

export default Button
