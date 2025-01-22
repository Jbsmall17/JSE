import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5"

export default function QuoteForm () {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        services: {
            residential: {
                siteVisit: false,
                faultTracing: false,
                faultRepairing: false
            },
            commercial: {
                siteVisit: false,
                faultTracing: false,
                faultRepairing: false
            },
            industrial: {
                siteVisit: false,
                faultTracing: false,
                faultRepairing: false
            }
        }
    })
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setShowError(false)
    }

    const handleServiceChange = (category, service) => {
        setFormData(prev => ({
            ...prev,
            services: {
                ...prev.services,
                [category]: {
                    ...prev.services[category],
                    [service]: !prev.services[category][service]
                }
            }
        }))
        setShowError(false)
    }

    const validateForm = () => {
        let isValid = true
        let message = ''

        if (!formData.fullName.trim()) {
            message = 'Please enter your full name'
            isValid = false
        } else if (!formData.email.trim()) {
            message = 'Please enter your email address'
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            message = 'Please enter a valid email address'
            isValid = false
        } else if (!formData.phoneNumber.trim()) {
            message = 'Please enter your phone number'
            isValid = false
        } else if (!formData.address.trim()) {
            message = 'Please enter your address'
            isValid = false
        }

        // Check if at least one service is selected
        const hasSelectedService = Object.values(formData.services).some(category =>
            Object.values(category).some(value => value)
        )

        if (!hasSelectedService) {
            message = 'Please select at least one service'
            isValid = false
        }

        if (!isValid) {
            setErrorMessage(message)
            setShowError(true)
        }

        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            try {
                localStorage.setItem('quoteFormData', JSON.stringify(formData))
                navigate('/pricing')
            } catch (error) {
                console.error('Error:', error)
                setErrorMessage('An error occurred. Please try again.')
                setShowError(true)
            }
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1200px] mx-auto p-8">
                {/* Header */ }
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                        <img src="/jse_logo.png" alt="Japs Solar Energy" className="w-16 h-16" />
                        <h1 className="text-[#f1b210] text-xl font-semibold">Japs Solar Energy</h1>
                    </div>
                    <button
                        onClick={ () => navigate('/') }
                        className="flex items-center gap-2 text-black hover:opacity-80"
                    >
                        Close <span className="bg-[#f1b210] p-1.5 rounded"><IoClose className="text-lg" /></span>
                    </button>
                </div>

                {/* Main Content */ }
                <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* Left Panel - Green Sidebar */ }
                    <div className="md:w-1/3 bg-[#034D28] p-8 text-white">
                        <h2 className="text-3xl font-semibold mb-4">
                            Request for a Solar Installation, site engineer for a visit
                        </h2>
                    </div>

                    {/* Right Panel - Form */ }
                    <div className="md:w-2/3 p-8">
                        { showError && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 relative">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">{ errorMessage }</p>
                                    </div>
                                    <button
                                        onClick={ () => setShowError(false) }
                                        className="ml-auto pl-3"
                                    >
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) }

                        <h2 className="text-2xl font-semibold mb-8 text-[#034D28]">
                            Solar installation site visit, kindly enter the details below to get started
                        </h2>

                        <form onSubmit={ handleSubmit } className="space-y-8">
                            {/* Personal Information */ }
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Full name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={ formData.fullName }
                                        onChange={ handleInputChange }
                                        className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={ formData.phoneNumber }
                                        onChange={ handleInputChange }
                                        className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                        placeholder="+234"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={ formData.email }
                                        onChange={ handleInputChange }
                                        className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Home address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={ formData.address }
                                        onChange={ handleInputChange }
                                        className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                        placeholder="Enter your address"
                                    />
                                </div>
                            </div>

                            {/* Service Selection */ }
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-medium mb-4 text-gray-700">Site visit/Inspection</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        { ['residential', 'commercial', 'industrial'].map((category) => (
                                            <button
                                                key={ `site-${ category }` }
                                                type="button"
                                                onClick={ () => handleServiceChange(category, 'siteVisit') }
                                                className={ `p-4 rounded-lg text-left font-medium transition-all ${ formData.services[category].siteVisit
                                                    ? 'bg-[#034D28] text-white'
                                                    : 'bg-[#E8F0E9] text-gray-700 hover:bg-[#d4e5d6]'
                                                    }` }
                                            >
                                                { category.charAt(0).toUpperCase() + category.slice(1) }
                                            </button>
                                        )) }
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-4 text-gray-700">Fault Tracing</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        { ['residential', 'commercial', 'industrial'].map((category) => (
                                            <button
                                                key={ `fault-${ category }` }
                                                type="button"
                                                onClick={ () => handleServiceChange(category, 'faultTracing') }
                                                className={ `p-4 rounded-lg text-left font-medium transition-all ${ formData.services[category].faultTracing
                                                    ? 'bg-[#034D28] text-white'
                                                    : 'bg-[#E8F0E9] text-gray-700 hover:bg-[#d4e5d6]'
                                                    }` }
                                            >
                                                { category.charAt(0).toUpperCase() + category.slice(1) }
                                            </button>
                                        )) }
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-4 text-gray-700">Fault Repairing</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        { ['residential', 'commercial', 'industrial'].map((category) => (
                                            <button
                                                key={ `repair-${ category }` }
                                                type="button"
                                                onClick={ () => handleServiceChange(category, 'faultRepairing') }
                                                className={ `p-4 rounded-lg text-left font-medium transition-all ${ formData.services[category].faultRepairing
                                                    ? 'bg-[#034D28] text-white'
                                                    : 'bg-[#E8F0E9] text-gray-700 hover:bg-[#d4e5d6]'
                                                    }` }
                                            >
                                                { category.charAt(0).toUpperCase() + category.slice(1) }
                                            </button>
                                        )) }
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */ }
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-[#f1b210] text-black px-16 py-4 rounded-lg font-semibold text-lg hover:bg-[#d99f0e] transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 