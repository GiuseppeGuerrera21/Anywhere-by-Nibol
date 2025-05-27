'use client'
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Logging in")
    }

    return (
        <AuthForm
            type="login"
            onSubmit={handleLogin}
            title="Login"
            subtitle="Don't have an account?"
            linkText="Signup"
            linkHref="/signup"
        />
    )
}
