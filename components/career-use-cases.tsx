import { Briefcase, GraduationCap, ArrowUpRight, RefreshCw } from "lucide-react"
import Image from "next/image"

const useCases = [
  {
    title: "Career Transitions",
    description:
      "Get personalized guidance for changing industries or roles, with skills gap analysis and targeted learning plans.",
    icon: RefreshCw,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Skills transferability assessment",
      "Industry-specific transition roadmaps",
      "Resume reframing for new roles",
      "Networking strategies for new industries",
    ],
  },
  {
    title: "Early Career Launch",
    description:
      "Start your professional journey with confidence through tailored guidance for recent graduates and early-career professionals.",
    icon: GraduationCap,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Entry-level resume optimization",
      "First job search strategies",
      "Interview preparation for new graduates",
      "Professional development planning",
    ],
  },
  {
    title: "Executive Advancement",
    description:
      "Accelerate your path to leadership with strategic career planning, executive presence development, and leadership skill enhancement.",
    icon: ArrowUpRight,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Leadership skills assessment",
      "Executive resume and LinkedIn optimization",
      "C-suite interview preparation",
      "Personal branding for executives",
    ],
  },
  {
    title: "Entrepreneurial Journey",
    description:
      "Transform your business idea into reality with guidance on skill development, networking, and personal branding for entrepreneurs.",
    icon: Briefcase,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Founder skill gap analysis",
      "Personal brand development",
      "Pitch preparation and feedback",
      "Strategic networking for startups",
    ],
  },
]

export function CareerUseCases() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Use Cases</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career guidance for every stage
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're just starting out, changing careers, or aiming for the C-suite, our Career Advisor provides
            personalized support for your unique journey.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex flex-col">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                    <useCase.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">{useCase.title}</h3>
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="flex-1 text-base leading-7 text-gray-600">{useCase.description}</p>
                  <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <ul className="mt-6 space-y-2">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-x-2 text-sm text-gray-600">
                        <svg
                          className="h-5 w-5 flex-none text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
