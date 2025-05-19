import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export function SearchTestimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Scientist",
      content:
        "The AI Search Companion has transformed how I conduct literature reviews. What used to take weeks now takes days, and the synthesis capabilities help me identify connections I might have missed.",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Graduate Student",
      content:
        "As a PhD student, I'm constantly researching. This tool has not only saved me countless hours but also improved the quality of my research by helping me find and evaluate sources more effectively.",
      avatar: "MJ",
      rating: 5,
    },
    {
      name: "Prof. David Williams",
      role: "University Professor",
      content:
        "I recommend the AI Search Companion to all my students. The citation generation alone is worth it, but the ability to evaluate source credibility is invaluable in today's information landscape.",
      avatar: "DW",
      rating: 4,
    },
    {
      name: "Lisa Rodriguez",
      role: "Journalist",
      content:
        "In investigative journalism, finding reliable information quickly is essential. This tool helps me cut through the noise and identify credible sources, making my reporting more accurate and efficient.",
      avatar: "LR",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Researchers Are Saying</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how the AI Search Companion is helping researchers, students, and professionals find and
              synthesize information more effectively.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-amber-500 text-amber-500" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 border-l-4 border-amber-200 pl-4 italic text-gray-700">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
