"use client"

import { useState, useRef, useEffect } from "react"
import { Paperclip, Send, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChatMessage } from "@/components/chat-message"
import { cn } from "@/lib/utils"
import { FileUploadModal } from "@/components/file-upload-modal"
import { useToast } from "@/components/ui/use-toast"
import { AssignmentOutputControls } from "@/components/assignment-output-controls"

// Message type definition
interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  agent: string | null
  timestamp?: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "system",
      content: "Hello! I'm ALMA, your AI-powered learning assistant. How can I help you today?",
      agent: "system",
      timestamp: new Date().toISOString(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentAgent, setCurrentAgent] = useState("assignment")
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const [showOutputControls, setShowOutputControls] = useState(false)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      agent: null,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          agent: currentAgent,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, data])
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileUpload = async (files: File[]) => {
    if (files.length === 0) return

    setIsLoading(true)

    // Add user message about the upload
    const fileNames = files.map((file) => file.name).join(", ")
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: `I've uploaded: ${fileNames}`,
      agent: null,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])

    try {
      // Create form data for the file
      const formData = new FormData()
      formData.append("file", files[0]) // For simplicity, we'll just use the first file
      formData.append("agent", currentAgent)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload file")
      }

      const data = await response.json()

      if (data.message) {
        setMessages((prev) => [...prev, data.message])
      }

      toast({
        title: "File uploaded",
        description: "Your file has been successfully uploaded and processed.",
      })
    } catch (error) {
      console.error("Error uploading file:", error)
      toast({
        title: "Error",
        description: "Failed to upload file. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleOutputControls = () => {
    setShowOutputControls(!showOutputControls)
  }

  const agent = currentAgent // just for readability

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gray-500"></span>
              </div>
              <div className="max-w-[80%] rounded-lg bg-gray-100 p-3">
                <div className="flex space-x-2">
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
      </div>
      {agent === "assignment" && messages.length > 0 && (
        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-700">Output Options</h3>
            <Button variant="ghost" size="sm" onClick={toggleOutputControls}>
              {showOutputControls ? "Hide Options" : "Show Options"}
            </Button>
          </div>
          {showOutputControls && (
            <AssignmentOutputControls
              className="mb-4"
              onDownload={() => {
                toast({
                  title: "Download started",
                  description: "Your assignment is being prepared for download.",
                })
              }}
              onShare={() => {
                toast({
                  title: "Share link created",
                  description: "A shareable link has been copied to your clipboard.",
                })
              }}
              onSave={() => {
                toast({
                  title: "Assignment saved",
                  description: "Your assignment has been saved to your account.",
                })
              }}
            />
          )}
        </div>
      )}
      <div className="border-t bg-white p-4">
        <div className="flex items-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => setUploadModalOpen(true)}
            disabled={isLoading}
          >
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <div className="relative flex-1">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
              className="min-h-[80px] resize-none pr-12"
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" disabled={isLoading}>
                <Mic className="h-5 w-5" />
                <span className="sr-only">Voice input</span>
              </Button>
              <Button
                size="icon"
                className={cn(
                  "h-8 w-8 bg-[#3B82F6] hover:bg-[#1E3A8A]",
                  (!input.trim() || isLoading) && "opacity-50 cursor-not-allowed",
                )}
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FileUploadModal open={uploadModalOpen} onOpenChange={setUploadModalOpen} onUpload={handleFileUpload} />
    </div>
  )
}
