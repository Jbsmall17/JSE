import React from 'react'

export default function CaseStudy({children,content}) {
  return (
    <div className='bg-white'>
        <div>
            {children}
        </div>
        <div className='relative py-3 px-2'>
           <p className='text-[#105504] text-base'>{content}</p>
           <button className='absolute bottom-2 leading-none right-2 px-2 py-1 rounded-lg bg-[#f1b210] text-sm'>Read more</button> 
        </div>
    </div>
  )
}
