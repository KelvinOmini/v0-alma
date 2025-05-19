import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Briefcase, HeartPulse } from "lucide-react"

const featuredTestimonials = [
  {
    content:
      "ALMA's Assignment Helper transformed my academic experience. I was struggling with research papers, but with ALMA's guidance on structure, research methods, and citations, I improved my grades from B's to consistent A's. The feedback on my writing style was particularly helpful.",
    author: {
      name: "Emily Chen",
      role: "University Student, Biology Major",
      avatar: "/placeholder.svg?height=96&width=96",
      initials: "EC",
    },
    agent: {
      name: "Assignment Helper",
      icon: BookOpen,
      color: "#3B82F6",
    },
    stats: {
      gradesImproved: "B to A",
      timeSaved: "5+ hours per paper",
      paperScore: "95%",
    },
  },
  {
    content:
      "As a career counselor, I recommend ALMA to all my students. The Career Advisor agent helped one of my students completely transform their resume, prepare for interviews, and land their dream job in tech. The personalized guidance and industry-specific advice made all the difference.",
    author: {
      name: "Marcus Johnson",
      role: "Career Counselor, State University",
      avatar: "/placeholder.svg?height=96&width=96",
      initials: "MJ",
    },
    agent: {
      name: "Career Advisor",
      icon: Briefcase,
      color: "#10B981",
    },
    stats: {
      interviewSuccess: "80% increase",
      jobOffers: "3 offers in 2 weeks",
      salaryIncrease: "25%",
    },
  },
  {
    content:
      "During my final semester, I was overwhelmed with stress and anxiety. ALMA's Counselor Bot provided me with daily check-ins, personalized stress management techniques, and helped me create a balanced schedule. I wouldn't have made it through without this support.",
    author: {
      name: "Sophia Rodriguez",
      role: "Graduate Student, Psychology",
      avatar: "/placeholder.svg?height=96&width=96",
      initials: "SR",
    },
    agent: {
      name: "Counselor Bot",
      icon: HeartPulse,
      color: "#EC4899",
    },
    stats: {
      stressReduction: "60% decrease",
      sleepImprovement: "2+ hours nightly",
      productivityGain: "40% increase",
    },
  },
]

export function TestimonialsFeatured() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Featured Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transformative Results with ALMA
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read how ALMA has made a significant impact on the lives of our users, helping them achieve their academic
            and professional goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-1 flex-col justify-between bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ backgroundColor: testimonial.agent.color }}
                  >
                    <testimonial.agent.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.agent.name}</h3>
                    <p className="text-sm text-gray-500">Success Story</p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-base text-gray-600">"{testimonial.content}"</p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-2xl font-semibold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-500">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 px-8 py-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.author.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
