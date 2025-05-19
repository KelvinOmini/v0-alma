"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ChatInterface } from "@/components/chat-interface"
import { Toaster } from "@/components/ui/toaster"

export function Dashboard() {
  const [currentAgent, setCurrentAgent] = useState("assignment")

  const handleAgentChange = (agentId: string) => {
    setCurrentAgent(agentId)
    // In a real app, you would reset the chat or load agent-specific chat history
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header onAgentChange={handleAgentChange} />
      <div className="flex-1 overflow-hidden">
        <ChatInterface key={currentAgent} />
      </div>
      <Toaster />
    </div>
  )
}
