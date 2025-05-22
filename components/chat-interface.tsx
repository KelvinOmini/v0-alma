"use client"

import { useState, useRef, useEffect } from "react"
// Paperclip, Send, Mic, Button, Textarea, cn are now primarily used in ChatInputArea
// ChatMessage is used in MessageList
import { FileUploadModal } from "@/components/file-upload-modal"
import { useToast } from "@/components/ui/use-toast"
// It's good practice to keep specific UI elements like Button here if ChatInterface itself uses them directly,
// but in this refactor, they are mostly moved.
import { Button } from "@/components/ui/button" // Kept for AssignmentOutputControls toggle
import { AssignmentOutputControls } from "@/components/assignment-output-controls"
import { sendChatMessage, uploadFile } from "@/lib/apiClient"
import type { Message, AgentName } from "../lib/types" // Import the shared Message and AgentName types
import { MessageList } from "./message-list" // Import the new MessageList component
import { ChatInputArea } from "./chat-input-area" // Import the new ChatInputArea component

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
  const [currentAgent, setCurrentAgent] = useState<AgentName>("assignment") // Updated type for currentAgent
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
      // Use the new apiClient function
      const data = await sendChatMessage(input, currentAgent)
      setMessages((prev) => [...prev, data])
    } catch (error) {
      // Error handling remains similar, apiClient functions throw errors on failure
      console.error("Error sending message:", error)
      // Ensure the error message is a string
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again."
      toast({
        title: "Error",
        description: errorMessage,
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
      // Use the new apiClient function for file upload
      // files[0] is used as per original logic
      const data = await uploadFile(files[0], currentAgent)

      if (data.message) {
        setMessages((prev) => [...prev, data.message])
      }

      toast({
        title: "File uploaded",
        description: "Your file has been successfully uploaded and processed.",
      })
    } catch (error) {
      // Error handling remains similar, apiClient functions throw errors on failure
      console.error("Error uploading file:", error)
      // Ensure the error message is a string
      const errorMessage = error instanceof Error ? error.message : "Failed to upload file. Please try again."
      toast({
        title: "Error",
        description: errorMessage,
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
      {/* Use the new MessageList component */}
      <MessageList messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />

      {/* AssignmentOutputControls remains here for now */}
      {agent === "assignment" && messages.length > 0 && (
        <div className="border-t border-gray-200 pt-4 pb-2 px-4"> {/* Added px-4 for consistency */}
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

      {/* Use the new ChatInputArea component */}
      <ChatInputArea
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        handleSendMessage={handleSendMessage}
        onFileUploadClick={() => setUploadModalOpen(true)}
      />

      <FileUploadModal open={uploadModalOpen} onOpenChange={setUploadModalOpen} onUpload={handleFileUpload} />
    </div>
  )
}
