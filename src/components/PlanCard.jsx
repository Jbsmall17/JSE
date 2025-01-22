import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5"

export default function PlanCard ({
    title,
    price,
    features,
    selected,
    onSelect
}) {
    return (
        <div
            onClick={ onSelect }
            className={ `bg-white rounded-lg p-6 cursor-pointer transition-all duration-300 ${ selected ? 'ring-2 ring-[#f1b210]' : ''
                }` }
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{ title }</h3>
                { selected && (
                    <span className="bg-[#f1b210] p-1 rounded-sm">✓</span>
                ) }
            </div>
            <p className="text-sm text-gray-600 mb-4">This plan of services includes</p>
            <ul className="space-y-3 mb-6">
                { features.map((feature, index) => (
                    <li key={ index } className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline className="text-[#105504] text-xl" />
                        <span className="text-sm">{ feature }</span>
                    </li>
                )) }
            </ul>
            <p className="text-2xl font-bold">#{ price.toLocaleString() }</p>
        </div>
    )
} 