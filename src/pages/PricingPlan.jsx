import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5"
import { PaystackButton } from 'react-paystack'
import axios from 'axios'

export default function PricingPlan () {
    const publicKey = import.meta.env.VITE_APP_PUBLIC_TEST_KEY || ""
    const secretKey = import.meta.env.VITE_PUBLIC_SECRET_KEY || ""
    const formData = localStorage.getItem("quoteFormData")
    const parseFormData = JSON.parse(formData)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [selectedPlanObj,setSelectedPlanObj] = useState({})
    const navigate = useNavigate()

    const plans = [
        {
            title: 'Residential Plan',
            price: 50000,
            features: [
                'small office space',
                'site visit',
                'fault tracing',
                'fault repair',
                'a personal home'
            ]
        },
        {
            title: 'Commercial Plan',
            price: 150000,
            features: [
                'Business profession',
                'site visit',
                'fault tracing',
                'fault repair',
                'Tech Firms',
                'Medical/dental offices'
            ]
        },
        {
            title: 'Industrial Plan',
            price: 450000,
            features: [
                'Production company',
                'site visit',
                'fault tracing',
                'fault repair',
                'Warehouse',
                'Processing center',
                'Regional/headquarters operation'
            ]
        }
    ]

    const componentProps = {
        email: parseFormData.email,
        amount: selectedPlanObj.price * 100,
        publicKey,
        text: "Pay Now",
        onSuccess: async (response)=>{
            const response2 = await axios.get(`https://api.paystack.co/transaction/verify/${response.reference}`, {
                headers: {
                  Authorization: `Bearer ${secretKey}`,
                },
            });
            if (response2.data.data.status === 'success'){
                alert("payment verified")
                localStorage.clear()
            }
        },
        onClose: async ()=>{
            // console.log("Payment cancelled")
        }
    }

    return (
        <div className="min-h-screen bg-[#F8E5C2]">
            <div className="max-w-[1200px] mx-auto p-8">
                {/* Header */ }
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                        <img src="/jse_logo.png" alt="Japs Solar Energy" className="w-16 h-16" />
                        <h1 className="text-[#f1b210] text-xl font-semibold">Japs Solar Energy</h1>
                    </div>
                    <button
                        onClick={ () => navigate('/quote') }
                        className="flex items-center gap-2 text-black hover:opacity-80"
                    >
                        Close <span className="bg-[#f1b210] p-1.5 rounded"><IoClose className="text-lg" /></span>
                    </button>
                </div>

                {/* Select Plan Header */ }
                <div className="bg-[#034D28] text-white p-6 rounded-lg flex items-center gap-4 mb-12">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM20 19H4V9H20V19Z" fill="currentColor" />
                        <path d="M18 11H6V13H18V11Z" fill="currentColor" />
                        <path d="M12 15H6V17H12V15Z" fill="currentColor" />
                        <path d="M19 3H5C3.9 3 3 3.9 3 5H21C21 3.9 20.1 3 19 3Z" fill="currentColor" />
                    </svg>
                    <div>
                        <span className="text-xl font-semibold block">Select Plan</span>
                        <p className="text-sm opacity-90">Simple and affordable Services for your Solar maintenance</p>
                    </div>
                </div>

                {/* Plan Cards */ }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    { plans.map((plan, index) => (
                        <div
                            key={ index }
                            onClick={ () => {setSelectedPlan(index); setSelectedPlanObj(plan)}}
                            className={ `bg-white p-8 rounded-2xl cursor-pointer transition-all hover:shadow-lg ${ selectedPlan === index ? 'ring-2 ring-[#034D28]' : ''
                                }` }
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-[#034D28]">{ plan.title }</h3>
                                { selectedPlan === index && (
                                    <div className="bg-[#034D28] text-white p-1.5 rounded-full">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                ) }
                            </div>
                            <div className="space-y-3 mb-8">
                                { plan.features.map((feature, i) => (
                                    <div key={ i } className="flex items-center gap-3">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#034D28" />
                                        </svg>
                                        <span className="text-gray-700">{ feature }</span>
                                    </div>
                                )) }
                            </div>
                            <p className="text-3xl font-bold text-[#034D28]">₦{ plan.price.toLocaleString() }</p>
                        </div>
                    )) }
                </div>

                {/* Continue Button */ }
                <div className="flex justify-center">
                    {/* <button> */}
                        <PaystackButton
                            disabled={!selectedPlanObj.price}
                            className="bg-[#f1b210] text-black px-16 py-4 rounded-lg font-semibold text-lg hover:bg-[#d99f0e] transition-colors"
                            {...componentProps}
                        >
                        </PaystackButton>
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
} 