import type { Metadata } from "next"
import { ForgotPasswordForm } from "@/components/forgot-password-form"
import { CustomLogo } from "@/components/custom-logo"

export const metadata: Metadata = {
  title: "Forgot Password | ALMA - AI-Powered Learning & Management Assistant",
  description: "Reset your ALMA account password.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <CustomLogo size="lg" />
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600">No worries, we'll send you reset instructions</p>
          </div>
          <ForgotPasswordForm />
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            &larr; Back to login
          </a>
        </div>
      </div>
    </div>
  )
}
