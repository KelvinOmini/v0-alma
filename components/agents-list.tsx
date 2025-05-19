import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, HeartPulse, Search, GraduationCap } from "lucide-react"

const agents = [
  {
    id: "assignment-helper",
    name: "Assignment Helper",
    description: "Get assistance with research, writing, citations, and academic tasks.",
    icon: BookOpen,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    learnMoreLink: "/agents/assignment-helper",
    tryNowLink: "/dashboard",
  },
  {
    id: "career-advisor",
    name: "Career Advisor",
    description: "Receive guidance on resume building, job searching, and interview preparation.",
    icon: Briefcase,
    color: "bg-green-500",
    textColor: "text-green-500",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    learnMoreLink: "/agents/career-advisor",
    tryNowLink: "/dashboard",
  },
  {
    id: "counselor-bot",
    name: "Counselor Bot",
    description: "Get emotional support, stress management techniques, and wellness resources.",
    icon: HeartPulse,
    color: "bg-pink-500",
    textColor: "text-pink-500",
    borderColor: "border-pink-200",
    bgColor: "bg-pink-50",
    learnMoreLink: "/agents/counselor-bot",
    tryNowLink: "/dashboard/counselor-bot/dashboard",
  },
  {
    id: "exam-buddy",
    name: "Exam Buddy",
    description: "Study more effectively with practice questions, explanations, and test strategies.",
    icon: GraduationCap,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
    learnMoreLink: "/agents/exam-buddy",
    tryNowLink: "/dashboard/exam-buddy/dashboard",
  },
  {
    id: "ai-search-companion",
    name: "AI Search Companion",
    description: "Find and synthesize information from multiple sources with advanced search capabilities.",
    icon: Search,
    color: "bg-amber-500",
    textColor: "text-amber-500",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    learnMoreLink: "#",
    tryNowLink: "/dashboard",
  },
]

export function AgentsList() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className={`border ${agent.borderColor}`}>
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${agent.color} flex items-center justify-center mb-3`}>
                  <agent.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{agent.name}</CardTitle>
                <CardDescription>{agent.description}</CardDescription>
              </CardHeader>
              <CardContent className={`${agent.bgColor} p-4 rounded-md`}>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-2 ${agent.textColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized assistance
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-2 ${agent.textColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 availability
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-2 ${agent.textColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Specialized knowledge
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-2 w-full">
                  <Button asChild className="w-full" variant="outline">
                    <Link href={agent.learnMoreLink}>Learn More</Link>
                  </Button>
                  <Button asChild className={`w-full ${agent.color}`}>
                    <Link href={agent.tryNowLink}>Try Now</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
