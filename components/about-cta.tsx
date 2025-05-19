import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutCTA() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to experience ALMA for yourself?
          <br />
          <span className="text-xl font-medium text-blue-200">Join us in transforming education through AI.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/dashboard">
              Try ALMA Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-white hover:text-blue-100">
            <Link href="/features">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
