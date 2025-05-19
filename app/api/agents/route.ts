import { type NextRequest, NextResponse } from "next/server"

// Agent data with capabilities and descriptions
const agents = [
  {
    id: "assignment",
    name: "Assignment Helper",
    description: "Guides assignment creation, editing, and research",
    capabilities: [
      "Essay structure and planning",
      "Research assistance",
      "Citation formatting",
      "Grammar and style checking",
      "Document analysis",
    ],
    icon: "BookOpen",
  },
  {
    id: "career",
    name: "Career Advisor",
    description: "Recommends career paths and learning resources",
    capabilities: [
      "Career path exploration",
      "Skill assessment",
      "Resume and cover letter review",
      "Interview preparation",
      "Industry insights",
    ],
    icon: "Briefcase",
  },
  {
    id: "counseling",
    name: "Counselor Bot",
    description: "Offers emotional and wellness check-ins",
    capabilities: [
      "Stress management techniques",
      "Emotional support",
      "Wellness resources",
      "Study-life balance advice",
      "Motivation and goal setting",
    ],
    icon: "HeartPulse",
  },
  {
    id: "exam",
    name: "Exam Buddy",
    description: "Creates quizzes, summaries, and study plans",
    capabilities: [
      "Custom practice quizzes",
      "Study plan creation",
      "Concept explanations",
      "Flashcard generation",
      "Exam strategy advice",
    ],
    icon: "Brain",
  },
  {
    id: "search",
    name: "AI Search Companion",
    description: "Conducts reliable research",
    capabilities: [
      "Web search and filtering",
      "Source credibility assessment",
      "Information synthesis",
      "Topic exploration",
      "Research organization",
    ],
    icon: "Search",
  },
]

export async function GET() {
  return NextResponse.json(agents)
}

export async function POST(request: NextRequest) {
  try {
    const { agentId } = await request.json()

    // Validate request
    if (!agentId) {
      return NextResponse.json({ error: "Agent ID is required" }, { status: 400 })
    }

    const agent = agents.find((a) => a.id === agentId)

    if (!agent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      agent,
      welcomeMessage: {
        id: Date.now().toString(),
        role: "assistant",
        content: `Hello! I'm your ${agent.name}. ${agent.description}. How can I assist you today?`,
        agent: agent.id,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error in agent selection API:", error)
    return NextResponse.json({ error: "Failed to process agent selection" }, { status: 500 })
  }
}
