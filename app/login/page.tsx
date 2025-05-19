import type { Metadata } from "next"
import { LoginForm } from "@/components/login-form"
import { CustomLogo } from "@/components/custom-logo"

export const metadata: Metadata = {
  title: "Login | ALMA - AI-Powered Learning & Management Assistant",
  description: "Log in to your ALMA account to access AI-powered learning tools and resources.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <CustomLogo size="lg" />
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="mt-2 text-sm text-gray-600">Log in to your account to continue your learning journey</p>
          </div>
          <LoginForm />
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
