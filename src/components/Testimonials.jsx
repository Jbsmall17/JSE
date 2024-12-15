import React from 'react'
import { FaQuoteRight } from "react-icons/fa"


export default function Testimonials({content,children,name,role,bgDivColor,bgIconColor}) {
  return (
    <div className={`${bgDivColor} ${bgIconColor} rounded-lg flex-1 py-6 px-8 text-center`}>
        <div className='flex justify-center mb-4'>
         <FaQuoteRight className={`text-4xl`} />
        </div>
        <p className='mb-8'>{content}</p>
        <div className='flex justify-center gap-3 items-center'>
            {children}
            <div>
                <p className='text-lg font-semibold'>{name}</p>
                <p className='text-base'>{role}</p>
            </div>
        </div>
    </div>
  )
}
