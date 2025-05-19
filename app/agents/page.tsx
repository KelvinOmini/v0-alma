import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { AgentsHero } from "@/components/agents-hero"
import { AgentsList } from "@/components/agents-list"
import { AgentDetails } from "@/components/agent-details"
import { AgentExamples } from "@/components/agent-examples"
import { AgentComparison } from "@/components/agent-comparison"
import { AgentsCTA } from "@/components/agents-cta"

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <AgentsHero />
        <AgentsList />
        <AgentDetails />
        <AgentExamples />
        <AgentComparison />
        <AgentsCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
