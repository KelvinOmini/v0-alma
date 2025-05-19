"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HeartPulse, Send, Paperclip, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "resource" | "exercise" | "assessment"
  resourceType?: "article" | "video" | "tool" | "crisis"
  resourceTitle?: string
  resourceLink?: string
}

type Resource = {
  id: string
  title: string
  description: string
  type: "article" | "video" | "tool" | "crisis"
  link: string
  tags: string[]
}

type Exercise = {
  id: string
  title: string
  description: string
  duration: string
  category: "mindfulness" | "stress" | "mood" | "sleep"
}

const resources: Resource[] = [
  {
    id: "r1",
    title: "Understanding Stress and Anxiety",
    description: "Learn about the physiological and psychological aspects of stress and anxiety.",
    type: "article",
    link: "#",
    tags: ["stress", "anxiety", "education"],
  },
  {
    id: "r2",
    title: "5-Minute Mindfulness Meditation",
    description: "A quick guided meditation to help center yourself during busy days.",
    type: "video",
    link: "#",
    tags: ["mindfulness", "meditation", "quick"],
  },
  {
    id: "r3",
    title: "Sleep Hygiene Assessment",
    description: "Evaluate your sleep habits and get personalized recommendations.",
    type: "tool",
    link: "#",
    tags: ["sleep", "assessment", "habits"],
  },
  {
    id: "r4",
    title: "Crisis Support Resources",
    description: "Immediate resources for mental health emergencies.",
    type: "crisis",
    link: "#",
    tags: ["crisis", "emergency", "support"],
  },
]

const exercises: Exercise[] = [
  {
    id: "e1",
    title: "Box Breathing",
    description: "A simple breathing technique to reduce stress and improve focus.",
    duration: "5 minutes",
    category: "stress",
  },
  {
    id: "e2",
    title: "Body Scan Meditation",
    description: "A guided practice to release tension throughout your body.",
    duration: "10 minutes",
    category: "mindfulness",
  },
  {
    id: "e3",
    title: "Gratitude Journal",
    description: "Write down three things you're grateful for to improve mood.",
    duration: "5 minutes",
    category: "mood",
  },
  {
    id: "e4",
    title: "Progressive Muscle Relaxation",
    description: "Tense and relax muscle groups to reduce physical stress.",
    duration: "15 minutes",
    category: "sleep",
  },
]

const quickResponses = [
  "I'm feeling stressed about school",
  "I need help with anxiety",
  "How can I improve my sleep?",
  "I'm having relationship problems",
]

export function CounselorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hi there, I'm your Counselor Bot. I'm here to provide emotional support, stress management techniques, and wellness resources. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("chat")

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim() === "") return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickResponse = (response: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(response)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase()

    // Check for stress-related keywords
    if (
      lowerInput.includes("stress") ||
      lowerInput.includes("overwhelm") ||
      lowerInput.includes("pressure") ||
      lowerInput.includes("too much")
    ) {
      return {
        id: Date.now().toString(),
        content:
          "I understand that feeling stressed can be overwhelming. Would you like to try a quick breathing exercise to help calm your mind, or would you prefer some strategies for managing your workload?",
        sender: "bot",
        timestamp: new Date(),
      }
    }

    // Check for anxiety-related keywords
    else if (
      lowerInput.includes("anxiety") ||
      lowerInput.includes("anxious") ||
      lowerInput.includes("worry") ||
      lowerInput.includes("nervous")
    ) {
      return {
        id: Date.now().toString() + "-resource",
        content:
          "Anxiety can be really challenging to deal with. I have some resources that might help you understand and manage anxiety better.",
        sender: "bot",
        timestamp: new Date(),
        type: "resource",
        resourceType: "article",
        resourceTitle: "Understanding and Managing Anxiety",
        resourceLink: "#",
      }
    }

    // Check for sleep-related keywords
    else if (
      lowerInput.includes("sleep") ||
      lowerInput.includes("insomnia") ||
      lowerInput.includes("tired") ||
      lowerInput.includes("rest")
    ) {
      return {
        id: Date.now().toString() + "-exercise",
        content:
          "Sleep difficulties can affect your overall wellbeing. Here's a relaxation exercise that might help you prepare for better sleep.",
        sender: "bot",
        timestamp: new Date(),
        type: "exercise",
      }
    }

    // Check for crisis-related keywords
    else if (
      lowerInput.includes("suicid") ||
      lowerInput.includes("kill myself") ||
      lowerInput.includes("end my life") ||
      lowerInput.includes("no point") ||
      lowerInput.includes("give up")
    ) {
      return {
        id: Date.now().toString() + "-crisis",
        content:
          "I'm concerned about what you're sharing. If you're having thoughts of harming yourself, please reach out to immediate support. The National Suicide Prevention Lifeline is available 24/7 at 988 or 1-800-273-8255. Would you like me to provide more crisis resources?",
        sender: "bot",
        timestamp: new Date(),
        type: "resource",
        resourceType: "crisis",
        resourceTitle: "Crisis Support Resources",
        resourceLink: "#",
      }
    }

    // Default response
    else {
      return {
        id: Date.now().toString(),
        content:
          "Thank you for sharing that with me. Could you tell me more about what you're experiencing so I can better understand how to support you?",
        sender: "bot",
        timestamp: new Date(),
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="border-b bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
              <HeartPulse className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Counselor Bot</h2>
              <p className="text-sm text-gray-500">Emotional support & wellness resources</p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-5 w-5 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">
                  The Counselor Bot provides emotional support and wellness resources. It is not a replacement for
                  professional mental health services.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid w-full grid-cols-3 bg-pink-50">
          <TabsTrigger value="chat" className="data-[state=active]:bg-white">
            Chat
          </TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-white">
            Resources
          </TabsTrigger>
          <TabsTrigger value="exercises" className="data-[state=active]:bg-white">
            Exercises
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "bot" && (
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-pink-100 text-pink-600">CB</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.type === "resource" ? (
                    <div>
                      <p className="mb-2">{message.content}</p>
                      <div className="mt-2 rounded-md bg-white p-3 shadow-sm">
                        <div className="flex items-center">
                          <Badge
                            className={
                              message.resourceType === "article"
                                ? "bg-blue-100 text-blue-800"
                                : message.resourceType === "video"
                                  ? "bg-purple-100 text-purple-800"
                                  : message.resourceType === "tool"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }
                          >
                            {message.resourceType}
                          </Badge>
                          <h4 className="ml-2 text-sm font-medium">{message.resourceTitle}</h4>
                        </div>
                        <Button variant="link" size="sm" className="mt-1 h-auto p-0 text-pink-600" asChild>
                          <a href={message.resourceLink} target="_blank" rel="noopener noreferrer">
                            View Resource
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : message.type === "exercise" ? (
                    <div>
                      <p className="mb-2">{message.content}</p>
                      <div className="mt-2 rounded-md bg-white p-3 shadow-sm">
                        <h4 className="text-sm font-medium">Progressive Muscle Relaxation</h4>
                        <p className="mt-1 text-xs text-gray-600">15 minutes • Stress Reduction</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-pink-50 text-pink-600 hover:bg-pink-100">
                          Start Exercise
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p>{message.content}</p>
                  )}
                </div>
                {message.sender === "user" && (
                  <Avatar className="ml-2 h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-gray-200">You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-pink-100 text-pink-600">CB</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t bg-white p-4">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="bg-pink-50 text-pink-600 hover:bg-pink-100"
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={input.trim() === ""}
                className="shrink-0 bg-pink-600 hover:bg-pink-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Wellness Resources</h3>
            <p className="text-sm text-gray-600">Explore these resources to support your emotional wellbeing</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`p-4 ${
                      resource.type === "article"
                        ? "bg-blue-50"
                        : resource.type === "video"
                          ? "bg-purple-50"
                          : resource.type === "tool"
                            ? "bg-green-50"
                            : "bg-red-50"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        className={
                          resource.type === "article"
                            ? "bg-blue-100 text-blue-800"
                            : resource.type === "video"
                              ? "bg-purple-100 text-purple-800"
                              : resource.type === "tool"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }
                      >
                        {resource.type}
                      </Badge>
                    </div>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="mt-1 text-sm">{resource.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-pink-600" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        View Resource
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="exercises" className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Wellness Exercises</h3>
            <p className="text-sm text-gray-600">Practice these exercises to improve your mental wellbeing</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`p-4 ${
                      exercise.category === "mindfulness"
                        ? "bg-blue-50"
                        : exercise.category === "stress"
                          ? "bg-green-50"
                          : exercise.category === "mood"
                            ? "bg-purple-50"
                            : "bg-indigo-50"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        className={
                          exercise.category === "mindfulness"
                            ? "bg-blue-100 text-blue-800"
                            : exercise.category === "stress"
                              ? "bg-green-100 text-green-800"
                              : exercise.category === "mood"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-indigo-100 text-indigo-800"
                        }
                      >
                        {exercise.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{exercise.duration}</span>
                    </div>
                    <h4 className="font-medium">{exercise.title}</h4>
                    <p className="mt-1 text-sm">{exercise.description}</p>
                    <Button variant="outline" size="sm" className="mt-3 bg-white text-pink-600 hover:bg-pink-50">
                      Start Exercise
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
