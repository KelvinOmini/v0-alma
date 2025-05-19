import { Brain, BookOpen, HeartPulse, Briefcase, Search, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "Specialized AI Agents",
    description: "Access multiple AI agents designed for specific tasks, from academic assistance to career guidance.",
    icon: Brain,
  },
  {
    name: "Multimodal Interface",
    description: "Interact through text, voice, or file uploads for a natural and flexible experience.",
    icon: Zap,
  },
  {
    name: "Document Analysis",
    description: "Upload documents for AI-powered analysis, summaries, and question answering.",
    icon: BookOpen,
  },
  {
    name: "Personalized Support",
    description: "Receive tailored assistance based on your unique needs and learning style.",
    icon: HeartPulse,
  },
  {
    name: "Career Guidance",
    description: "Get expert advice on career paths, skill development, and job opportunities.",
    icon: Briefcase,
  },
  {
    name: "Research Companion",
    description: "Conduct reliable research with AI-powered search and source verification.",
    icon: Search,
  },
]

export function HomeFeatures() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for learning and productivity
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA combines advanced AI capabilities with an intuitive interface to provide comprehensive support for
            students, professionals, and lifelong learners.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-md px-6">
            <Link href="/features">View All Features</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
