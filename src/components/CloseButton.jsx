import React from 'react'

export default function CloseButton ({ onClick }) {
    return (
        <button
            onClick={ onClick }
            className="absolute top-4 right-4 flex items-center gap-2 text-sm"
        >
            Close <span className="bg-[#f1b210] p-1 text-xs">✕</span>
        </button>
    )
} 