import React from 'react'

export default function Team({children,role,name}) {
  return (
    <div className='w-[90%] sm:max-w-[300px] lg:max-w-[325px] xl:max-w-[350px] text-[#105504]'>
      <div>
        {children}
      </div>
      <p className='text-center text-lg font-semibold'>{role}</p>
      <p className='text-center text-base'>{name}</p>
    </div>
  )
}
