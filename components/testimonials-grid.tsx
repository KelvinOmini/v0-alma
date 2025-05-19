import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "ALMA helped me improve my essay writing skills dramatically. The Assignment Helper provided clear guidance on structure and gave me feedback that my professors never had time to give.",
    author: {
      name: "Alex Thompson",
      role: "Undergraduate Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AT",
    },
    rating: 5,
  },
  {
    content:
      "The Exam Buddy created personalized study plans that helped me prepare for my medical school exams more efficiently than ever before. I saved hours of study time.",
    author: {
      name: "Dr. Priya Patel",
      role: "Medical Resident",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PP",
    },
    rating: 5,
  },
  {
    content:
      "As a non-native English speaker, ALMA's writing assistance has been invaluable. It helps me express my ideas clearly and professionally in academic papers.",
    author: {
      name: "Hiroshi Tanaka",
      role: "PhD Candidate",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "HT",
    },
    rating: 4,
  },
  {
    content:
      "The Career Advisor helped me completely revamp my resume and prepare for interviews. I landed a job at a top tech company within weeks of using ALMA.",
    author: {
      name: "Jordan Williams",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JW",
    },
    rating: 5,
  },
  {
    content:
      "ALMA's Counselor Bot provided me with emotional support during a difficult semester. The stress management techniques were practical and effective.",
    author: {
      name: "Olivia Martinez",
      role: "Graduate Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "OM",
    },
    rating: 5,
  },
  {
    content:
      "The AI Search Companion has transformed how I conduct research. It finds reliable sources and synthesizes information in a way that saves me hours of work.",
    author: {
      name: "Professor David Chen",
      role: "University Faculty",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DC",
    },
    rating: 4,
  },
  {
    content:
      "As a parent helping my high school student, ALMA has been a game-changer. The Assignment Helper guides without doing the work for them, teaching valuable skills.",
    author: {
      name: "Sarah Johnson",
      role: "Parent",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    rating: 5,
  },
  {
    content:
      "I used ALMA to prepare for the LSAT. The Exam Buddy created practice questions and explained concepts in a way that helped me score in the 95th percentile.",
    author: {
      name: "Michael Brown",
      role: "Law School Applicant",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
    },
    rating: 5,
  },
  {
    content:
      "The Career Advisor helped me transition careers at 45. The guidance on transferable skills and interview preparation was invaluable for my mid-career change.",
    author: {
      name: "Jennifer Lee",
      role: "Career Changer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JL",
    },
    rating: 4,
  },
]

export function TestimonialsGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">User Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Users Are Saying</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from students, professionals, educators, and parents who have experienced the benefits of ALMA's
            AI-powered assistance.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">"{testimonial.content}"</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-xs leading-5 text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
