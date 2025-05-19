import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Pre-Med Student",
    content:
      "Exam Buddy helped me raise my Organic Chemistry grade from a C to an A-. The practice quizzes identified my weak areas, and the concept explanations finally made reaction mechanisms click for me.",
    avatar: "AJ",
  },
  {
    name: "Priya Patel",
    role: "Computer Science Major",
    content:
      "I was struggling with data structures and algorithms until I started using Exam Buddy. The visual explanations and step-by-step problem solving approach made complex concepts much easier to understand.",
    avatar: "PP",
  },
  {
    name: "Marcus Williams",
    role: "Law Student",
    content:
      "Preparing for the bar exam was overwhelming until I found Exam Buddy. The customized study plan and practice questions were invaluable. I passed on my first attempt!",
    avatar: "MW",
  },
  {
    name: "Emma Rodriguez",
    role: "High School Senior",
    content:
      "Exam Buddy helped me prepare for my AP exams in a way that actually made sense. The personalized study schedule kept me on track, and I earned college credit in all five of my AP subjects.",
    avatar: "ER",
  },
]

export function ExamTestimonials() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Students Achieving Their Goals
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how Exam Buddy has helped students at all levels improve their grades and confidence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-200">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                    <AvatarFallback className="bg-purple-100 text-purple-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
