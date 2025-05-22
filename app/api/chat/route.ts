import { type NextRequest, NextResponse } from "next/server"
import type { AgentName } from "@/lib/types" // Import AgentName

// Define the expected request body structure
interface ChatRequestBody {
  message: string;
  agent: AgentName; // Use the shared AgentName type
}

// Simulated agent responses - in a real app, this would connect to AI services
const agentResponses: Record<Exclude<AgentName, "system">, string[]> = { // Typed agentResponses
  assignment: [
    "I can help with your assignment. What subject are you working on?",
    "Let me analyze this assignment for you. The key points to address are...",
    "Based on your assignment requirements, I recommend structuring your response with these sections...",
  ],
  career: [
    "I'm your Career Advisor. What career paths are you interested in exploring?",
    "Based on your interests, these career options might be a good fit for you...",
    "Here are some resources and courses that can help you prepare for this career path...",
  ],
  counseling: [
    "I'm here to support you. How are you feeling today?",
    "It sounds like you're going through a challenging time. Let's talk about some strategies that might help...",
    "Remember that it's okay to ask for help. Would you like me to suggest some resources?",
  ],
  exam: [
    "I can help you prepare for your exam. What subject are you studying?",
    "Here's a study plan that might work well for your upcoming exam...",
    "Let me create a practice quiz to help you test your knowledge on this topic...",
  ],
  search: [
    "I can help you find reliable information. What would you like to research?",
    "Here are some credible sources on this topic...",
    "Based on my search, here's a summary of the key information you're looking for...",
  ],
}

export async function POST(request: NextRequest) {
  try {
    const { message, agent } = await request.json() as ChatRequestBody; // Use ChatRequestBody for type assertion

    // Validate request
    // AgentName type ensures agent is one of the valid names, but we still check if it's provided.
    if (!message || !agent) {
      return NextResponse.json({ error: "Message and agent are required" }, { status: 400 })
    }

    // Check if the provided agent is a valid key in agentResponses (excluding "system")
    if (agent === "system" || !agentResponses[agent as Exclude<AgentName, "system">]) {
      return NextResponse.json({ error: "Invalid agent specified" }, { status: 400 });
    }
    
    // In a real implementation, this would call the appropriate AI service
    // For now, we'll simulate a response
    const responses = agentResponses[agent as Exclude<AgentName, "system">] || [] // Cast here is safe due to above check
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // The response payload should also conform to the Message interface from lib/types.ts
    // Specifically, the 'agent' field here should be AgentName.
    return NextResponse.json({
      id: Date.now().toString(),
      role: "assistant",
      content: randomResponse || "I'm not sure how to respond to that.",
      agent: agent, // This is now typed as AgentName from the request
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
