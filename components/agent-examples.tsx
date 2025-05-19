import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Briefcase, HeartPulse, Brain, Search } from "lucide-react"

const agentExamples = [
  {
    id: "assignment",
    name: "Assignment Helper",
    icon: BookOpen,
    color: "#3B82F6",
    examples: [
      {
        title: "Essay Structure Planning",
        description:
          "The Assignment Helper can help you create a well-structured outline for your essay, including thesis statement, main points, and supporting evidence.",
        image: "/placeholder.svg?height=400&width=600&text=Essay+Structure+Example",
      },
      {
        title: "Research Paper Assistance",
        description:
          "Get help finding credible sources, organizing your research, and integrating citations properly into your paper.",
        image: "/placeholder.svg?height=400&width=600&text=Research+Paper+Example",
      },
      {
        title: "Writing Improvement",
        description:
          "Receive suggestions to improve clarity, coherence, and academic tone in your writing, with explanations of grammar and style rules.",
        image: "/placeholder.svg?height=400&width=600&text=Writing+Improvement+Example",
      },
    ],
  },
  {
    id: "career",
    name: "Career Advisor",
    icon: Briefcase,
    color: "#10B981",
    examples: [
      {
        title: "Resume Enhancement",
        description:
          "The Career Advisor can analyze your resume and provide specific suggestions to highlight your strengths and achievements for your target roles.",
        image: "/placeholder.svg?height=400&width=600&text=Resume+Enhancement+Example",
      },
      {
        title: "Interview Preparation",
        description:
          "Practice with simulated interviews tailored to your industry, with feedback on your responses and suggestions for improvement.",
        image: "/placeholder.svg?height=400&width=600&text=Interview+Preparation+Example",
      },
      {
        title: "Career Path Planning",
        description:
          "Explore potential career paths based on your skills, interests, and goals, with recommendations for skill development.",
        image: "/placeholder.svg?height=400&width=600&text=Career+Path+Planning+Example",
      },
    ],
  },
  {
    id: "counseling",
    name: "Counselor Bot",
    icon: HeartPulse,
    color: "#EC4899",
    examples: [
      {
        title: "Stress Management",
        description:
          "The Counselor Bot can teach you evidence-based techniques for managing stress and anxiety, such as deep breathing, progressive muscle relaxation, and mindfulness.",
        image: "/placeholder.svg?height=400&width=600&text=Stress+Management+Example",
      },
      {
        title: "Emotional Support",
        description:
          "Receive empathetic responses and guidance when dealing with difficult emotions or situations, with a focus on validation and coping strategies.",
        image: "/placeholder.svg?height=400&width=600&text=Emotional+Support+Example",
      },
      {
        title: "Work-Life Balance",
        description:
          "Get help creating boundaries and routines that support your well-being while meeting your academic or professional responsibilities.",
        image: "/placeholder.svg?height=400&width=600&text=Work-Life+Balance+Example",
      },
    ],
  },
  {
    id: "exam",
    name: "Exam Buddy",
    icon: Brain,
    color: "#8B5CF6",
    examples: [
      {
        title: "Study Plan Creation",
        description:
          "The Exam Buddy can create a personalized study schedule based on your exam date, current knowledge level, and available study time.",
        image: "/placeholder.svg?height=400&width=600&text=Study+Plan+Example",
      },
      {
        title: "Practice Quiz Generation",
        description:
          "Generate custom quizzes to test your knowledge on specific topics, with explanations for correct and incorrect answers.",
        image: "/placeholder.svg?height=400&width=600&text=Practice+Quiz+Example",
      },
      {
        title: "Concept Explanation",
        description:
          "Receive clear, concise explanations of complex concepts with examples, analogies, and visual aids to enhance understanding.",
        image: "/placeholder.svg?height=400&width=600&text=Concept+Explanation+Example",
      },
    ],
  },
  {
    id: "search",
    name: "AI Search Companion",
    icon: Search,
    color: "#F59E0B",
    examples: [
      {
        title: "Research Synthesis",
        description:
          "The AI Search Companion can find and synthesize information from multiple reliable sources on your research topic.",
        image: "/placeholder.svg?height=400&width=600&text=Research+Synthesis+Example",
      },
      {
        title: "Source Evaluation",
        description:
          "Get help evaluating the credibility and reliability of sources, with transparency about information quality and potential biases.",
        image: "/placeholder.svg?height=400&width=600&text=Source+Evaluation+Example",
      },
      {
        title: "Topic Exploration",
        description:
          "Explore a topic in depth with guided discovery of related concepts, alternative viewpoints, and emerging research.",
        image: "/placeholder.svg?height=400&width=600&text=Topic+Exploration+Example",
      },
    ],
  },
]

export function AgentExamples() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Real-World Examples</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See ALMA's Agents in Action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore practical examples of how each AI agent can assist with specific tasks and challenges.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <Tabs defaultValue="assignment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
              {agentExamples.map((agent) => (
                <TabsTrigger
                  key={agent.id}
                  value={agent.id}
                  className="flex items-center gap-2 data-[state=active]:bg-white"
                  style={{ "--tab-accent": agent.color } as React.CSSProperties}
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: agent.color }}
                  >
                    <agent.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="hidden md:inline">{agent.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {agentExamples.map((agent) => (
              <TabsContent key={agent.id} value={agent.id} className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {agent.examples.map((example) => (
                    <div
                      key={example.title}
                      className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl"
                    >
                      <img
                        src={example.image || "/placeholder.svg"}
                        alt={example.title}
                        className="h-48 w-full object-cover object-center"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{example.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
