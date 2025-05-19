import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen } from "lucide-react"

const testimonials = [
  {
    content:
      "The Assignment Helper transformed my writing process. I used to struggle with organizing my thoughts, but the outline feature helped me structure my essays logically. My professor even commented on how much my writing has improved this semester!",
    author: {
      name: "Emily Chen",
      role: "Undergraduate Student, English Literature",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
      initials: "EC",
    },
    stats: {
      gradesImproved: "B to A",
    },
  },
  {
    content:
      "As an international student, academic writing in English was always challenging for me. The Assignment Helper's grammar and style suggestions taught me how to write more clearly and professionally. I'm much more confident in my writing now.",
    author: {
      name: "Wei Zhang",
      role: "Graduate Student, Engineering",
      avatar: "/placeholder.svg?height=40&width=40&text=WZ",
      initials: "WZ",
    },
    stats: {
      confidenceGain: "90%",
    },
  },
  {
    content:
      "The research assistance feature saved me so much time! Instead of spending hours searching for sources, I could focus on analyzing and synthesizing information. The citation tool also ensured my bibliography was perfectly formatted.",
    author: {
      name: "Jamal Washington",
      role: "Senior, Political Science",
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
      initials: "JW",
    },
    stats: {
      timeSaved: "5+ hours",
    },
  },
]

export function AssignmentTestimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h2 className="text-base font-semibold leading-7 text-blue-600">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Students Achieving Their Goals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from students who have improved their writing, saved time, and achieved better grades with the
            Assignment Helper.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">"{testimonial.content}"</p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author.name}</h3>
                    <p className="text-xs leading-5 text-gray-500">{testimonial.author.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {key.replace(/([A-Z])/g, " $1").trim()}: {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
