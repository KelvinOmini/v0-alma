import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Briefcase, Search, Brain, HeartPulse, Bot } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  agent: string | null
}

interface ChatMessageProps {
  message: Message
}

const agentConfig = {
  assignment: {
    name: "Assignment Helper",
    icon: BookOpen,
    color: "#3B82F6",
    bgColor: "#EFF6FF",
  },
  career: {
    name: "Career Advisor",
    icon: Briefcase,
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  counseling: {
    name: "Counselor Bot",
    icon: HeartPulse,
    color: "#EC4899",
    bgColor: "#FCE7F3",
  },
  exam: {
    name: "Exam Buddy",
    icon: Brain,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
  },
  search: {
    name: "AI Search",
    icon: Search,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
  system: {
    name: "ALMA",
    icon: Bot,
    color: "#6B7280",
    bgColor: "#F3F4F6",
  },
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"
  const agent = message.agent ? agentConfig[message.agent as keyof typeof agentConfig] : null

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-lg bg-[#3B82F6] p-3 text-white">
          <p>{message.content}</p>
        </div>
      </div>
    )
  }

  const AgentIcon = agent?.icon || Bot

  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={agent?.name || "AI"} />
        <AvatarFallback style={{ backgroundColor: agent?.color || "#6B7280" }}>
          <AgentIcon className="h-4 w-4 text-white" />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        {agent && (
          <span className="text-xs font-medium" style={{ color: agent.color }}>
            {agent.name}
          </span>
        )}
        <div
          className="max-w-[80%] rounded-lg p-3 text-gray-800"
          style={{ backgroundColor: agent?.bgColor || "#F3F4F6" }}
        >
          <p>{message.content}</p>
        </div>
      </div>
    </div>
  )
}
