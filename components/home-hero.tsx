import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HomeHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1E3A8A" />
              <stop offset={1} stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            ALMA: Your AI-Powered Learning Assistant
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A unified AI-powered dashboard that integrates specialized AI agents to deliver seamless assistance in
            academics, counseling, career guidance, and productivity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-md px-6">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-md px-6">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
          <div className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="ALMA Dashboard Preview"
              className="h-auto w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
