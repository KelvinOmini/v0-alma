import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SearchCTA() {
  return (
    <section className="bg-amber-500 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Transform Your Research Experience
            </h2>
            <p className="max-w-[900px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find, synthesize, and organize information more effectively with the AI Search Companion.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-white text-amber-500 hover:bg-amber-50">
              <Link href="/dashboard/ai-search-companion/dashboard">Try Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-600">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
