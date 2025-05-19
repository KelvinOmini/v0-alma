import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CareerHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.green.100),white)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600">
            <Briefcase className="h-10 w-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Career Advisor</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your personal career coach providing expert guidance on job searching, resume building, interview
            preparation, and professional development.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/dashboard">Try Career Advisor</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
