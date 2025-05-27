'use client'
import AuthForm from '@/components/AuthForm'

export default function SignupPage() {
    const handleSignup = (e) => {
        e.preventDefault()
        console.log("Signing up")
    }

    return (
        <AuthForm
            type="signup"
            onSubmit={handleSignup}
            title="Signup"
            subtitle="Already registered?"
            linkText="Login"
            linkHref="/login"
        />
    )
}
