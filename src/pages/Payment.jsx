import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

export default function Payment () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        acceptTerms: false
    });
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        // Check if user came from pricing
        const quoteData = localStorage.getItem('quoteFormData');
        if (!quoteData) {
            navigate('/quote');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        let errorMessage = '';

        if (!formData.cardholderName.trim()) {
            errorMessage += "Cardholder's name is required\n";
            isValid = false;
        }

        if (!formData.cardNumber.trim() || !/^\d{16}$/.test(formData.cardNumber)) {
            errorMessage += 'Valid 16-digit card number is required\n';
            isValid = false;
        }

        if (!formData.expiryMonth || !formData.expiryYear) {
            errorMessage += 'Expiry date is required\n';
            isValid = false;
        }

        if (!formData.cvv.trim() || !/^\d{3}$/.test(formData.cvv)) {
            errorMessage += 'Valid 3-digit CVV is required\n';
            isValid = false;
        }

        if (!formData.acceptTerms) {
            errorMessage += 'You must accept the terms and conditions\n';
            isValid = false;
        }

        if (!isValid) {
            alert(errorMessage);
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsProcessing(true);
            try {
                // Simulate payment processing
                await new Promise(resolve => setTimeout(resolve, 2000));
                // Clear sensitive data
                localStorage.removeItem('quoteFormData');
                // Navigate to success page or show success message
                alert('Payment successful!');
                navigate('/');
            } catch (error) {
                console.error('Payment error:', error);
                alert('Payment failed. Please try again.');
            } finally {
                setIsProcessing(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#F8E5C2]">
            <div className="max-w-[600px] mx-auto p-8">
                {/* Header */ }
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                        <img src="/jse_logo.png" alt="Japs Solar Energy" className="w-16 h-16" />
                        <h1 className="text-[#f1b210] text-xl font-semibold">Japs Solar Energy</h1>
                    </div>
                    <button
                        onClick={ () => navigate('/pricing') }
                        className="flex items-center gap-2 text-black hover:opacity-80"
                    >
                        Close <span className="bg-[#f1b210] p-1.5 rounded"><IoClose className="text-lg" /></span>
                    </button>
                </div>

                {/* Payment Form */ }
                <div className="bg-white rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-[#034D28]">Payment Options</h2>

                    {/* Card Types */ }
                    <div className="bg-[#034D28] text-white p-6 flex justify-between items-center mb-8 rounded-lg">
                        <div>
                            <p className="text-lg font-medium">Credit card/ Debit card</p>
                            <p className="text-sm opacity-90">Transaction fee may apply</p>
                        </div>
                        <div className="flex gap-3">
                            <FaCcMastercard className="text-4xl" />
                            <FaCcVisa className="text-4xl" />
                        </div>
                    </div>

                    <form onSubmit={ handleSubmit } className="space-y-6">
                        {/* Cardholder Name */ }
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Cardholder's name</label>
                            <input
                                type="text"
                                name="cardholderName"
                                value={ formData.cardholderName }
                                onChange={ handleInputChange }
                                className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                            />
                        </div>

                        {/* Card Number */ }
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Card number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={ formData.cardNumber }
                                    onChange={ handleInputChange }
                                    maxLength="16"
                                    className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28] pr-12"
                                />
                                <FaCcVisa className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-[#034D28]" />
                            </div>
                        </div>

                        {/* Expiry Date and CVV */ }
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2 text-gray-700">End date</label>
                                <div className="flex gap-3">
                                    <select
                                        name="expiryMonth"
                                        value={ formData.expiryMonth }
                                        onChange={ handleInputChange }
                                        className="w-28 p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                    >
                                        <option value="">mm</option>
                                        { Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                            <option key={ month } value={ month.toString().padStart(2, '0') }>
                                                { month.toString().padStart(2, '0') }
                                            </option>
                                        )) }
                                    </select>
                                    <select
                                        name="expiryYear"
                                        value={ formData.expiryYear }
                                        onChange={ handleInputChange }
                                        className="w-28 p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                    >
                                        <option value="">yyy</option>
                                        { Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                                            <option key={ year } value={ year }>
                                                { year }
                                            </option>
                                        )) }
                                    </select>
                                </div>
                            </div>
                            <div className="w-28">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Cvv</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={ formData.cvv }
                                    onChange={ handleInputChange }
                                    maxLength="3"
                                    className="w-full p-4 rounded-lg bg-[#E8F0E9] border-none focus:ring-2 focus:ring-[#034D28]"
                                    placeholder="3 digits"
                                />
                            </div>
                        </div>

                        {/* Terms and Conditions */ }
                        <div className="flex items-start gap-3 mt-8">
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={ formData.acceptTerms }
                                onChange={ handleInputChange }
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#034D28] focus:ring-[#034D28]"
                            />
                            <label className="text-sm text-gray-700">
                                I have read and accept the terms of use, rules of right and privacy policy
                            </label>
                        </div>

                        {/* Submit Button */ }
                        <button
                            type="submit"
                            disabled={ isProcessing }
                            className="w-full bg-[#f1b210] text-black py-4 rounded-lg font-semibold text-lg hover:bg-[#d99f0e] transition-colors disabled:opacity-50 mt-8"
                        >
                            { isProcessing ? 'Processing...' : 'Pay now' }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
} 