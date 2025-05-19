"use client"

import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AgentSelector } from "@/components/agent-selector"

interface HeaderProps {
  onAgentChange?: (agentId: string) => void
}

export function Header({ onAgentChange }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <AgentSelector onAgentChange={onAgentChange} />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </header>
  )
}
