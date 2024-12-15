import React from 'react'

export default function Service({children,serviceName,serviceDesc}) {
  return (
    <div className='flex-1 flex flex-col gap-4 rounded-lg p-4 pt-8 relative bg-[#f1b210]'>
        <div className='bg-[#105504] h-[24px] w-[24px] flex justify-center items-center'>
            {children}
        </div>
        <p className='text-lg font-semibold text-[#105504]'>{serviceName}</p>
        <p className='text-[#105504] text-base'>{serviceDesc}</p>
    </div>
  )
}
