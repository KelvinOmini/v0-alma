import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function TestimonialsVideo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Video Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear Directly from Our Users
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Watch these short videos to see how ALMA has made a difference in the lives of students, professionals, and
            educators.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600&text=Student+Success+Story"
              alt="Student Success Story"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white/30"
              >
                <Play className="h-8 w-8" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold">From C to A: Emily's Academic Transformation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Emily shares how ALMA helped her improve her grades and confidence as a first-generation college
                student.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600&text=Professional+Success+Story"
              alt="Professional Success Story"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white/30"
              >
                <Play className="h-8 w-8" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold">Career Transition at 40: Michael's Journey</h3>
              <p className="mt-2 text-sm text-gray-300">
                Michael explains how ALMA's Career Advisor helped him successfully pivot to a new industry mid-career.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-lg">
            <img
              src="/placeholder.svg?height=200&width=400&text=Educator+Perspective"
              alt="Educator Perspective"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white/30"
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-base font-semibold">Professor Smith on ALMA in Education</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-lg">
            <img
              src="/placeholder.svg?height=200&width=400&text=Student+Group+Interview"
              alt="Student Group Interview"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white/30"
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-base font-semibold">Study Group Success with ALMA</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-lg">
            <img
              src="/placeholder.svg?height=200&width=400&text=Parent+Testimonial"
              alt="Parent Testimonial"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white/30"
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-base font-semibold">How ALMA Helps Parents Support Learning</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
