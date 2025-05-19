"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

interface Agent {
  id: string
  name: string
  description: string
  capabilities: string[]
  icon: string
}

interface AgentSelectorProps {
  onAgentChange?: (agentId: string) => void
}

export function AgentSelector({ onAgentChange }: AgentSelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("assignment")
  const [agents, setAgents] = useState<Agent[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Fetch agents on component mount
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/api/agents")
        if (!response.ok) {
          throw new Error("Failed to fetch agents")
        }
        const data = await response.json()
        setAgents(data)
      } catch (error) {
        console.error("Error fetching agents:", error)
        toast({
          title: "Error",
          description: "Failed to load agents. Please refresh the page.",
          variant: "destructive",
        })
      }
    }

    fetchAgents()
  }, [toast])

  const handleAgentChange = async (agentId: string) => {
    if (agentId === value) {
      setOpen(false)
      return
    }

    setValue(agentId)
    setOpen(false)
    setIsLoading(true)

    try {
      const response = await fetch("/api/agents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentId }),
      })

      if (!response.ok) {
        throw new Error("Failed to select agent")
      }

      const data = await response.json()

      // Notify parent component about the agent change
      if (onAgentChange) {
        onAgentChange(agentId)
      }

      toast({
        title: `Switched to ${data.agent.name}`,
        description: data.agent.description,
      })
    } catch (error) {
      console.error("Error selecting agent:", error)
      toast({
        title: "Error",
        description: "Failed to switch agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          disabled={isLoading}
        >
          {value ? agents.find((agent) => agent.id === value)?.name || "Select agent..." : "Select agent..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search agent..." />
          <CommandList>
            <CommandEmpty>No agent found.</CommandEmpty>
            <CommandGroup>
              {agents.map((agent) => (
                <CommandItem
                  key={agent.id}
                  value={agent.id}
                  onSelect={(currentValue) => handleAgentChange(currentValue)}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === agent.id ? "opacity-100" : "opacity-0")} />
                  {agent.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
