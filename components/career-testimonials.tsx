import Image from "next/image"

const testimonials = [
  {
    content:
      "The Career Advisor helped me completely transform my resume. I went from getting no callbacks to landing interviews at three top tech companies within two weeks.",
    name: "Alex Chen",
    role: "Software Engineer",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
  {
    content:
      "I was stuck in my career for years. The personalized roadmap from ALMA's Career Advisor gave me clear steps to transition into data science. I'm now in my dream role!",
    name: "Priya Sharma",
    role: "Data Scientist",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
  {
    content:
      "The interview preparation was game-changing. The AI simulated exactly the types of questions I got in my actual interviews and provided feedback that helped me improve rapidly.",
    name: "Marcus Johnson",
    role: "Product Manager",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
  {
    content:
      "As a recent graduate, I had no idea how to start my job search. The Career Advisor helped me identify my strengths, find suitable roles, and prepare tailored applications.",
    name: "Emma Rodriguez",
    role: "Marketing Specialist",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
  {
    content:
      "The salary negotiation advice was worth its weight in gold—literally! I secured a 15% higher offer than I would have accepted using the techniques suggested by the Career Advisor.",
    name: "David Kim",
    role: "Financial Analyst",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
  {
    content:
      "After being laid off, I was feeling lost. The Career Advisor helped me rebrand myself and highlight my transferable skills. I found a new position in just 6 weeks.",
    name: "Sarah Thompson",
    role: "Operations Manager",
    imageUrl: "/placeholder.svg?height=96&width=96",
  },
]

export function CareerTestimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career success stories from ALMA users
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how professionals across industries have advanced their careers with personalized guidance from our
            Career Advisor.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-2">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      className="object-cover"
                      src={testimonial.imageUrl || "/placeholder.svg"}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{testimonial.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-base italic leading-7 text-gray-600">"{testimonial.content}"</p>
              </div>
              <div className="mt-8 flex items-center gap-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
