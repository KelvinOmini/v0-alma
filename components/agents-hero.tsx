import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AgentsHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Meet ALMA's Specialized AI Agents
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          ALMA features a collaborative network of specialized AI agents, each designed to excel in specific domains
          while working together to provide comprehensive assistance for your learning and productivity needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="rounded-md px-6">
            <Link href="/dashboard">
              Try ALMA Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="rounded-md px-6">
            <Link href="#agent-comparison">Compare Agents</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
