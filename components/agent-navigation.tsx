import { BookOpen, Briefcase, Search, Brain, HeartPulse } from "lucide-react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

const agents = [
  {
    name: "Assignment Helper",
    icon: BookOpen,
    path: "/assignment",
    color: "#3B82F6",
  },
  {
    name: "Career Advisor",
    icon: Briefcase,
    path: "/career",
    color: "#10B981",
  },
  {
    name: "Counselor Bot",
    icon: HeartPulse,
    path: "/counseling",
    color: "#EC4899",
  },
  {
    name: "Exam Buddy",
    icon: Brain,
    path: "/exam",
    color: "#8B5CF6",
  },
  {
    name: "AI Search",
    icon: Search,
    path: "/search",
    color: "#F59E0B",
  },
]

export function AgentNavigation() {
  return (
    <SidebarMenu>
      {agents.map((agent) => (
        <SidebarMenuItem key={agent.name}>
          <SidebarMenuButton asChild>
            <a href={agent.path} className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center" style={{ color: agent.color }}>
                <agent.icon className="h-4 w-4" />
              </div>
              <span>{agent.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
