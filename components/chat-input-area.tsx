"use client"

import React from "react"
import { Paperclip, Send, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ChatInputAreaProps {
  input: string
  setInput: (value: string) => void
  isLoading: boolean
  handleSendMessage: () => void
  onFileUploadClick: () => void
}

export function ChatInputArea({
  input,
  setInput,
  isLoading,
  handleSendMessage,
  onFileUploadClick,
}: ChatInputAreaProps) {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex items-end gap-2">
        <Button
          variant="outline"
          size="icon"
          className="shrink-0"
          onClick={onFileUploadClick}
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
  )
}
