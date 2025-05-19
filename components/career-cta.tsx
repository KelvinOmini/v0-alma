import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CareerCta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-green-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to accelerate your career?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
            Get personalized career guidance, resume optimization, interview preparation, and professional development
            planning with ALMA's Career Advisor.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary">
              <Link href="/dashboard">Try Career Advisor Now</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white hover:bg-green-500 border-white">
              <Link href="/agents">Explore Other Agents</Link>
            </Button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.25" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#FFFFFF" />
                <stop offset={1} stopColor="#22C55E" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
