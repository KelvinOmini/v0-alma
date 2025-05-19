import { Brain, Zap, Lock, BarChart, Layers, RefreshCw } from "lucide-react"

const technologies = [
  {
    name: "Advanced AI Models",
    description:
      "ALMA is powered by state-of-the-art large language models that have been fine-tuned specifically for educational contexts and specialized domains.",
    icon: Brain,
  },
  {
    name: "Specialized Agent Architecture",
    description:
      "Our unique multi-agent system allows different AI specialists to collaborate, providing comprehensive support across academic, career, and wellness domains.",
    icon: Layers,
  },
  {
    name: "Adaptive Learning",
    description:
      "ALMA's systems continuously learn from interactions, becoming more personalized and effective the more you use them.",
    icon: RefreshCw,
  },
  {
    name: "Real-time Processing",
    description:
      "Our optimized infrastructure enables near-instantaneous responses, making conversations with ALMA feel natural and engaging.",
    icon: Zap,
  },
  {
    name: "Privacy-first Design",
    description:
      "ALMA is built with privacy as a core principle, with robust data protection measures and transparent data usage policies.",
    icon: Lock,
  },
  {
    name: "Outcome Measurement",
    description:
      "We've developed sophisticated metrics to measure learning outcomes and continuously improve our AI agents' effectiveness.",
    icon: BarChart,
  },
]

export function AboutTechnology() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Science Behind ALMA</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA combines cutting-edge AI with insights from education science, psychology, and human-computer
            interaction to create a truly intelligent learning assistant.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <tech.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {tech.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{tech.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
