import React from 'react'

export default function ServiceOption ({ label, selected, onClick }) {
    return (
        <button
            onClick={ onClick }
            className={ `w-full p-3 text-left rounded-lg bg-[#B5C7B7] flex justify-between items-center ${ selected ? 'border-2 border-[#f1b210]' : ''
                }` }
        >
            { label }
            { selected && (
                <span className="bg-[#f1b210] p-1 rounded-sm">
                    ✓
                </span>
            ) }
        </button>
    )
} 