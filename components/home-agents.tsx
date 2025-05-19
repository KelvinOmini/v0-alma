import { BookOpen, Briefcase, HeartPulse, Brain, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const agents = [
  {
    name: "Assignment Helper",
    description:
      "Get assistance with assignments, essays, and research papers. Receive guidance on structure, content, and citations.",
    icon: BookOpen,
    color: "#3B82F6",
    bgColor: "#EFF6FF",
  },
  {
    name: "Career Advisor",
    description: "Explore career paths, get resume feedback, and prepare for interviews with personalized guidance.",
    icon: Briefcase,
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  {
    name: "Counselor Bot",
    description: "Receive emotional support, stress management techniques, and wellness resources for a balanced life.",
    icon: HeartPulse,
    color: "#EC4899",
    bgColor: "#FCE7F3",
  },
  {
    name: "Exam Buddy",
    description: "Create study plans, practice with custom quizzes, and get explanations for difficult concepts.",
    icon: Brain,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
  },
  {
    name: "AI Search Companion",
    description: "Find reliable information, assess source credibility, and synthesize research findings efficiently.",
    icon: Search,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
]

export function HomeAgents() {
  return (
    <div id="agents" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">AI Agents</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet your specialized AI assistants
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA features a network of specialized AI agents, each designed to excel in specific domains and collaborate
            to solve complex problems.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: agent.bgColor }}
            >
              <div className="flex-1 p-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-md"
                  style={{ backgroundColor: agent.color }}
                >
                  <agent.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{agent.name}</h3>
                <p className="mt-2 text-base text-gray-600">{agent.description}</p>
              </div>
              <div className="bg-white p-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard">Try {agent.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-md px-6">
            <Link href="/agents">Learn More About Our AI Agents</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
