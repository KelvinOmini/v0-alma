import { BookOpen, Briefcase, HeartPulse, Brain, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const agents = [
  {
    id: "assignment",
    name: "Assignment Helper",
    description:
      "The Assignment Helper is your academic writing assistant, guiding you through research papers, essays, and projects with expert assistance at every step of the process.",
    icon: BookOpen,
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    capabilities: [
      {
        title: "Essay Structure Planning",
        description:
          "Get help organizing your thoughts with outlines, thesis statements, and logical flow for your essays and papers.",
      },
      {
        title: "Research Assistance",
        description:
          "Find relevant sources, extract key information, and integrate research effectively into your assignments.",
      },
      {
        title: "Citation Formatting",
        description:
          "Generate properly formatted citations in APA, MLA, Chicago, and other styles for your bibliography.",
      },
      {
        title: "Grammar & Style Checking",
        description: "Improve your writing with suggestions for grammar, clarity, conciseness, and academic tone.",
      },
      {
        title: "Content Development",
        description:
          "Expand on your ideas with relevant examples, explanations, and analysis to strengthen your arguments.",
      },
    ],
    useCases: [
      "Writing research papers and essays",
      "Creating project reports and presentations",
      "Developing thesis statements and outlines",
      "Improving writing style and clarity",
      "Formatting citations and bibliographies",
    ],
  },
  {
    id: "career",
    name: "Career Advisor",
    description:
      "The Career Advisor helps you navigate your professional journey with personalized guidance on career paths, job applications, interview preparation, and skill development.",
    icon: Briefcase,
    color: "#10B981",
    bgColor: "#ECFDF5",
    capabilities: [
      {
        title: "Career Path Exploration",
        description:
          "Discover potential career paths based on your interests, skills, education, and goals with personalized recommendations.",
      },
      {
        title: "Resume & Cover Letter Review",
        description:
          "Get feedback on your resume and cover letters with suggestions for improvements to highlight your strengths.",
      },
      {
        title: "Interview Preparation",
        description:
          "Practice with mock interviews, receive feedback on your responses, and learn strategies for common questions.",
      },
      {
        title: "Skill Assessment & Development",
        description:
          "Identify skills needed for your target roles and get recommendations for courses and resources to develop them.",
      },
      {
        title: "Job Search Strategy",
        description:
          "Develop effective job search strategies, including networking approaches, application techniques, and negotiation tactics.",
      },
    ],
    useCases: [
      "Exploring potential career paths",
      "Creating and improving resumes",
      "Preparing for job interviews",
      "Identifying skills to develop",
      "Planning career transitions",
    ],
  },
  {
    id: "counseling",
    name: "Counselor Bot",
    description:
      "The Counselor Bot provides emotional support, stress management techniques, and wellness resources to help you maintain balance and well-being throughout your academic and professional journey.",
    icon: HeartPulse,
    color: "#EC4899",
    bgColor: "#FCE7F3",
    capabilities: [
      {
        title: "Emotional Support",
        description: "Receive empathetic listening and supportive responses to help process emotions and challenges.",
      },
      {
        title: "Stress Management",
        description:
          "Learn techniques for managing stress, anxiety, and overwhelm, including mindfulness and relaxation exercises.",
      },
      {
        title: "Wellness Resources",
        description: "Access resources for physical, mental, and emotional well-being, including self-care strategies.",
      },
      {
        title: "Goal Setting & Motivation",
        description: "Develop realistic goals, create action plans, and maintain motivation through challenges.",
      },
      {
        title: "Work-Life Balance",
        description:
          "Get guidance on balancing academic or professional responsibilities with personal life and self-care.",
      },
    ],
    useCases: [
      "Managing academic or work stress",
      "Developing healthy coping strategies",
      "Creating self-care routines",
      "Setting and maintaining boundaries",
      "Building resilience and motivation",
    ],
  },
  {
    id: "exam",
    name: "Exam Buddy",
    description:
      "The Exam Buddy helps you prepare for tests and exams with personalized study plans, practice quizzes, concept explanations, and memory techniques to maximize your learning and performance.",
    icon: Brain,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    capabilities: [
      {
        title: "Study Plan Creation",
        description:
          "Get personalized study schedules based on your exam date, current knowledge, and available study time.",
      },
      {
        title: "Practice Quiz Generation",
        description:
          "Test your knowledge with custom quizzes targeting specific topics or areas where you need improvement.",
      },
      {
        title: "Concept Explanations",
        description: "Receive clear explanations of difficult concepts with examples, analogies, and visual aids.",
      },
      {
        title: "Flashcard Creation",
        description:
          "Generate digital flashcards for key terms, concepts, and formulas to reinforce memory and recall.",
      },
      {
        title: "Exam Strategies",
        description:
          "Learn effective strategies for different exam formats, including multiple-choice, essay, and problem-solving questions.",
      },
    ],
    useCases: [
      "Preparing for exams and tests",
      "Creating effective study plans",
      "Understanding difficult concepts",
      "Practicing with sample questions",
      "Developing test-taking strategies",
    ],
  },
  {
    id: "search",
    name: "AI Search Companion",
    description:
      "The AI Search Companion helps you find reliable information, assess source credibility, and synthesize research findings to support your academic and professional work with accurate and trustworthy information.",
    icon: Search,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    capabilities: [
      {
        title: "Advanced Web Search",
        description: "Find relevant and reliable information across the web with sophisticated search techniques.",
      },
      {
        title: "Source Credibility Assessment",
        description: "Evaluate the reliability and authority of sources with transparency about information quality.",
      },
      {
        title: "Information Synthesis",
        description: "Combine information from multiple sources into coherent summaries and analyses.",
      },
      {
        title: "Topic Exploration",
        description:
          "Discover related concepts, alternative viewpoints, and emerging research in your area of interest.",
      },
      {
        title: "Research Organization",
        description: "Organize your research findings with structured notes, summaries, and citation management.",
      },
    ],
    useCases: [
      "Conducting research for papers",
      "Finding reliable sources",
      "Exploring complex topics",
      "Fact-checking information",
      "Staying updated on specific fields",
    ],
  },
]

export function AgentDetails() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {agents.map((agent) => (
          <div key={agent.id} id={agent.id} className="mb-24 scroll-mt-24 border-t border-gray-200 pt-16 last:mb-0">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-md"
                    style={{ backgroundColor: agent.color }}
                  >
                    <agent.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">{agent.name}</h2>
                </div>
                <p className="mt-6 text-lg text-gray-600">{agent.description}</p>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-900">Key Capabilities</h3>
                  <div className="mt-6 space-y-8">
                    {agent.capabilities.map((capability) => (
                      <div key={capability.title} className="relative">
                        <dt className="ml-9 text-lg font-semibold leading-7 text-gray-900">
                          <div
                            className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full"
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
                          {capability.title}
                        </dt>
                        <dd className="ml-9 mt-2 text-base leading-7 text-gray-600">{capability.description}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-900">Common Use Cases</h3>
                  <ul className="mt-6 space-y-3">
                    {agent.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start">
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
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Button asChild className="rounded-md" style={{ backgroundColor: agent.color }}>
                    <Link href="/dashboard">Try {agent.name} Now</Link>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl bg-gray-50 p-8">
                <div className="absolute inset-0 rounded-2xl opacity-10" style={{ backgroundColor: agent.color }}></div>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white p-2 shadow-lg">
                    <img
                      src={`/placeholder.svg?height=600&width=800&text=${agent.name}+Interface`}
                      alt={`${agent.name} interface`}
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>

                  <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900">Example Interaction</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div className="rounded-lg bg-gray-100 p-3">
                          <p className="text-sm text-gray-800">
                            {agent.id === "assignment" &&
                              "I need help with my research paper on climate change impacts."}
                            {agent.id === "career" &&
                              "Can you help me improve my resume for software engineering roles?"}
                            {agent.id === "counseling" && "I'm feeling overwhelmed with my coursework and deadlines."}
                            {agent.id === "exam" && "I have a biology exam next week and I'm struggling with genetics."}
                            {agent.id === "search" &&
                              "I need reliable sources about the economic impacts of renewable energy."}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: agent.color }}
                        >
                          <agent.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="rounded-lg bg-white p-3 shadow">
                          <p className="text-sm text-gray-800">
                            {agent.id === "assignment" &&
                              "I'd be happy to help with your climate change research paper. Let's start by defining the scope. Are you focusing on global impacts, regional effects, or specific sectors like agriculture or health?"}
                            {agent.id === "career" &&
                              "I'd be glad to help improve your software engineering resume. First, let's review your current resume to identify strengths and areas for improvement. Then we can tailor it to highlight relevant skills like programming languages, projects, and technical experience that match the job descriptions you're targeting."}
                            {agent.id === "counseling" &&
                              "I'm sorry to hear you're feeling overwhelmed. That's a common experience with multiple deadlines. Let's talk about what's on your plate right now and break it down into manageable steps. We can also discuss some stress management techniques that might help you cope better."}
                            {agent.id === "exam" &&
                              "I can definitely help you prepare for your biology exam. Genetics can be challenging! Let's start by identifying which specific concepts you're struggling with, like Mendelian inheritance, gene expression, or DNA replication. Then we can create a focused study plan and practice with some example problems."}
                            {agent.id === "search" &&
                              "I'll help you find reliable sources on the economic impacts of renewable energy. I'll focus on peer-reviewed journals, government reports, and research from established economic institutions. Would you like to narrow this down to specific types of renewable energy (solar, wind, etc.) or particular economic aspects (job creation, cost analysis, market trends)?"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
