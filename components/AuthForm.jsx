import Link from 'next/link';
import { useState, useEffect } from 'react';
import "../app/globals.css";
import InputField from './InputField';
import PasswordStrengthBar from './PasswordStrengthBar';
import TermsCheckbox from './TermsCheckbox';
import SuccessModal from './SuccessModal';

export default function AuthForm({ type, title, subtitle, linkText, linkHref }) {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [strength, setStrength] = useState({ length: false, uppercase: false, number: false });
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    useEffect(() => {
        setStrength({
            length: formData.password.length >= 8,
            uppercase: /[A-Z]/.test(formData.password),
            number: /\d/.test(formData.password),
        });
    }, [formData.password]);

    const calculateStrength = () => {
        const base = 30;
        const total = (+strength.length + +strength.uppercase + +strength.number) * 30;
        return Math.min(base + total, 100);
    };

    const getPasswordFeedback = () => {
        if (!formData.password) return '';
        if (!strength.length) return 'Too easy my friend';
        if (!strength.uppercase) return 'Include one uppercase letter.';
        if (!strength.number) return 'Include one number.';
        return 'Strong password!';
    };

    const validateForm = () => {
        const newErrors = {};
        if (type === 'signup') {
            if (!formData.name.trim()) newErrors.name = 'First name is required';
            else if (formData.name.length < 2) newErrors.name = 'First name must be at least 2 characters';

            if (!formData.company.trim()) newErrors.company = 'Last name is required';
            else if (formData.company.length < 2) newErrors.company = 'Last name must be at least 2 characters';

            if (!termsAccepted) newErrors.terms = 'You must accept the terms and conditions';
        }

        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        else if (type === 'signup' && (!strength.uppercase || !strength.number))
            newErrors.password = 'Password must contain at least one uppercase letter and one number';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
        if (e.target.checked && errors.terms) {
            const newErrors = { ...errors };
            delete newErrors.terms;
            setErrors(newErrors);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            setTimeout(() => {
                setShowModal(true);
                setIsSubmitting(false);
                if (type === 'signup') {
                    setFormData({ name: '', company: '', email: '', password: '' });
                    setTermsAccepted(false);
                } else {
                    setFormData(prev => ({ ...prev, password: '' }));
                }
            }, 1000);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border border-gray-200 bg-white py-8 px-10 rounded-xl">
                
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-black">{title}</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {subtitle}{' '}
                        {linkHref && linkText && (
                            <Link href={linkHref} className="font-bold hover:text-primary">
                                {linkText}
                            </Link>
                        )}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {type === 'signup' && (
                        <>
                            <InputField name="name" placeholder="First name" value={formData.name} onChange={handleChange} error={errors.name} />
                            <InputField name="company" placeholder="Last name" value={formData.company} onChange={handleChange} error={errors.company} />
                        </>
                    )}

                    <InputField name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} error={errors.email} />
                    <InputField name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} error={errors.password} />

                    {type === 'signup' && formData.password && (
                        <PasswordStrengthBar strength={calculateStrength()} feedback={getPasswordFeedback()} />
                    )}

                    {type === 'signup' && (
                        <TermsCheckbox accepted={termsAccepted} onChange={handleTermsChange} error={errors.terms} />
                    )}

                    <button
                        type="submit"
                        className="relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary transition duration-300 ease-in-out"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Processing...' : title}
                    </button>

                    <div className="flex justify-center">
                        <Link href="#" className="text-sm font-semibold hover:text-primary">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </div>

            {showModal && (
                <SuccessModal type={type} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
}
