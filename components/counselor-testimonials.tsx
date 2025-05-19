import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function CounselorTestimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "College Student",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The Counselor Bot helped me manage my anxiety during finals week. The breathing exercises and stress management techniques made a huge difference.",
    },
    {
      name: "Taylor Williams",
      role: "Graduate Student",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "I was struggling with balancing my research and personal life. The Counselor Bot provided practical strategies that helped me establish better boundaries.",
    },
    {
      name: "Jordan Lee",
      role: "High School Senior",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "College application stress was overwhelming me. The Counselor Bot's mindfulness exercises and emotional support helped me stay focused and positive.",
    },
    {
      name: "Morgan Chen",
      role: "Working Professional",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "When I was going through a difficult career transition, the Counselor Bot provided emotional support and practical coping strategies that really helped.",
    },
  ]

  return (
    <section className="bg-pink-50 py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">Student Success Stories</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            See how the Counselor Bot has helped students manage stress, anxiety, and emotional challenges.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-pink-100 bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
