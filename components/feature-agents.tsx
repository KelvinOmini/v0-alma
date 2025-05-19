import { BookOpen, Briefcase, HeartPulse, Brain, Search } from "lucide-react"
import Image from "next/image"

const agents = [
  {
    name: "Assignment Helper",
    description:
      "Guides you through assignments with research assistance, structure planning, and content suggestions.",
    icon: BookOpen,
    color: "#3B82F6",
    capabilities: [
      "Essay structure and planning",
      "Research assistance and citation",
      "Grammar and style checking",
      "Content suggestions and improvements",
      "Document analysis and feedback",
    ],
  },
  {
    name: "Career Advisor",
    description: "Provides personalized career guidance, resume feedback, and interview preparation.",
    icon: Briefcase,
    color: "#10B981",
    capabilities: [
      "Career path exploration",
      "Resume and cover letter review",
      "Interview preparation",
      "Skill assessment and development",
      "Job market insights and trends",
    ],
  },
  {
    name: "Counselor Bot",
    description: "Offers emotional support, stress management techniques, and wellness resources.",
    icon: HeartPulse,
    color: "#EC4899",
    capabilities: [
      "Emotional support and check-ins",
      "Stress management techniques",
      "Wellness resources and recommendations",
      "Study-life balance guidance",
      "Motivation and goal setting",
    ],
  },
  {
    name: "Exam Buddy",
    description: "Creates personalized study plans, practice quizzes, and concept explanations.",
    icon: Brain,
    color: "#8B5CF6",
    capabilities: [
      "Custom study plan creation",
      "Practice quiz generation",
      "Concept explanations and summaries",
      "Flashcard creation",
      "Exam strategy and preparation",
    ],
  },
  {
    name: "AI Search Companion",
    description: "Conducts reliable research with source credibility assessment and information synthesis.",
    icon: Search,
    color: "#F59E0B",
    capabilities: [
      "Web search and filtering",
      "Source credibility assessment",
      "Information synthesis and summarization",
      "Topic exploration and discovery",
      "Research organization and citation",
    ],
  },
]

export function FeatureAgents() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Specialized AI Agents</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Network of AI Experts at Your Service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA features a collaborative network of specialized AI agents, each designed to excel in specific domains
            while working together to provide comprehensive assistance.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} gap-12 py-12`}
            >
              <div className="flex-1 lg:max-w-xl">
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-md"
                  style={{ backgroundColor: agent.color }}
                >
                  <agent.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{agent.name}</h3>
                <p className="mt-3 text-lg text-gray-600">{agent.description}</p>
                <ul className="mt-8 space-y-3">
                  {agent.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start">
                      <div
                        className="mr-3 flex h-6 w-6 items-center justify-center rounded-full"
                        style={{ backgroundColor: agent.color }}
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-1 items-center justify-center lg:max-w-xl">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=${agent.name}`}
                    alt={`${agent.name} interface`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
