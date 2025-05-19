import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    content:
      "ALMA has completely transformed how I approach my studies. The Assignment Helper saved me countless hours on research papers.",
    author: {
      name: "Sarah Johnson",
      role: "University Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
  },
  {
    content:
      "As a career counselor, I recommend ALMA to all my students. The Career Advisor provides insights that complement our in-person sessions.",
    author: {
      name: "Michael Chen",
      role: "Career Counselor",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
  },
  {
    content:
      "The Exam Buddy helped me prepare for my certification exams with personalized quizzes and study plans. I passed with flying colors!",
    author: {
      name: "Priya Patel",
      role: "IT Professional",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PP",
    },
  },
  {
    content:
      "ALMA's Counselor Bot provided me with emotional support during a stressful semester. It's like having a supportive friend available 24/7.",
    author: {
      name: "James Wilson",
      role: "Graduate Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JW",
    },
  },
  {
    content:
      "The AI Search Companion has revolutionized how I conduct research for my classes. It finds reliable sources and synthesizes information quickly.",
    author: {
      name: "Emma Rodriguez",
      role: "High School Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
  },
  {
    content:
      "As a parent, I appreciate how ALMA helps my children with their homework while teaching them valuable research and writing skills.",
    author: {
      name: "David Thompson",
      role: "Parent",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DT",
    },
  },
]

export function HomeTestimonials() {
  return (
    <div id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear from our users</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how ALMA is helping students, professionals, and educators achieve their goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
            >
              <div className="flex-1">
                <p className="text-base leading-7 text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <Avatar>
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

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-md px-6">
            <Link href="/testimonials">Read More Success Stories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
