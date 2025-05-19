"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FormatSelector } from "@/components/format-selector"
import { Download, Share2, Bookmark, Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface AssignmentOutputControlsProps {
  onDownload?: () => void
  onShare?: () => void
  onSave?: () => void
  className?: string
}

export function AssignmentOutputControls({ onDownload, onShare, onSave, className }: AssignmentOutputControlsProps) {
  const [selectedFormat, setSelectedFormat] = useState("doc")
  const { toast } = useToast()

  const handleFormatChange = (format: string) => {
    setSelectedFormat(format)
  }

  const handleDownload = () => {
    toast({
      title: "Downloading content",
      description: `Your content is being prepared as a ${selectedFormat.toUpperCase()} file.`,
    })
    if (onDownload) onDownload()
  }

  const handleCopy = () => {
    toast({
      title: "Content copied",
      description: "The assignment content has been copied to your clipboard.",
    })
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <FormatSelector onFormatChange={handleFormatChange} />

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDownload}
          aria-label="Download content"
          title="Download content"
        >
          <Download className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy content" title="Copy content">
          <Copy className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={onShare} aria-label="Share content" title="Share content">
          <Share2 className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={onSave} aria-label="Save content" title="Save content">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
