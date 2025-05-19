import type { Metadata } from "next"
import { SignupForm } from "@/components/signup-form"
import { CustomLogo } from "@/components/custom-logo"

export const metadata: Metadata = {
  title: "Sign Up | ALMA - AI-Powered Learning & Management Assistant",
  description: "Create an ALMA account to access AI-powered learning tools and resources.",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <CustomLogo size="lg" />
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
            <p className="mt-2 text-sm text-gray-600">Join ALMA to enhance your learning experience</p>
          </div>
          <SignupForm />
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}
