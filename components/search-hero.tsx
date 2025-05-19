import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SearchHero() {
  return (
    <section className="relative overflow-hidden bg-amber-50 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                AI-Powered Research Assistant
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Find and Synthesize Information with AI
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover, analyze, and organize information from multiple sources with our advanced AI Search Companion.
                Get comprehensive research results in seconds, not hours.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <Link href="/dashboard/ai-search-companion/dashboard">Try Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 opacity-50 sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]"></div>
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 opacity-50 sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Search className="h-12 w-12" />
                </div>
              </div>
              <div className="absolute left-[15%] top-[20%] rounded-lg bg-white p-4 shadow-lg">
                <div className="h-2 w-20 rounded-full bg-amber-200 mb-2"></div>
                <div className="h-2 w-16 rounded-full bg-amber-100"></div>
              </div>
              <div className="absolute right-[15%] top-[30%] rounded-lg bg-white p-4 shadow-lg">
                <div className="h-2 w-24 rounded-full bg-amber-200 mb-2"></div>
                <div className="h-2 w-20 rounded-full bg-amber-100"></div>
              </div>
              <div className="absolute bottom-[25%] left-[25%] rounded-lg bg-white p-4 shadow-lg">
                <div className="h-2 w-16 rounded-full bg-amber-200 mb-2"></div>
                <div className="h-2 w-12 rounded-full bg-amber-100"></div>
              </div>
              <div className="absolute bottom-[35%] right-[20%] rounded-lg bg-white p-4 shadow-lg">
                <div className="h-2 w-20 rounded-full bg-amber-200 mb-2"></div>
                <div className="h-2 w-16 rounded-full bg-amber-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
