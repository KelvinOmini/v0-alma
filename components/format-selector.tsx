"use client"

import type React from "react"

import { useState } from "react"
import { Check, FileText, FileImage, FileIcon as FilePresentation, FileSpreadsheet, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"

export type FormatOption = {
  value: string
  label: string
  icon: React.ElementType
  description: string
}

const formatOptions: FormatOption[] = [
  {
    value: "doc",
    label: "Document",
    icon: FileText,
    description: "Standard text document format (.docx)",
  },
  {
    value: "pdf",
    label: "PDF",
    icon: FileText,
    description: "Portable Document Format (.pdf)",
  },
  {
    value: "ppt",
    label: "Presentation",
    icon: FilePresentation,
    description: "Slideshow presentation format (.pptx)",
  },
  {
    value: "txt",
    label: "Plain Text",
    icon: FileText,
    description: "Simple text format (.txt)",
  },
  {
    value: "xlsx",
    label: "Spreadsheet",
    icon: FileSpreadsheet,
    description: "Excel spreadsheet format (.xlsx)",
  },
  {
    value: "md",
    label: "Markdown",
    icon: FileText,
    description: "Markdown text format (.md)",
  },
  {
    value: "html",
    label: "HTML",
    icon: FileText,
    description: "Web page format (.html)",
  },
  {
    value: "img",
    label: "Image",
    icon: FileImage,
    description: "Image format (.png, .jpg)",
  },
]

interface FormatSelectorProps {
  onFormatChange?: (format: string) => void
  className?: string
}

export function FormatSelector({ onFormatChange, className }: FormatSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState<FormatOption>(formatOptions[0])

  const handleFormatSelect = (format: FormatOption) => {
    setSelectedFormat(format)
    setOpen(false)
    if (onFormatChange) {
      onFormatChange(format.value)
    }
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select output format"
            className="flex items-center justify-between w-[220px]"
          >
            <div className="flex items-center">
              <selectedFormat.icon className="mr-2 h-4 w-4 text-blue-600" />
              <span>{selectedFormat.label}</span>
            </div>
            <Download className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No format found.</CommandEmpty>
              <CommandGroup heading="Output Formats">
                {formatOptions.map((format) => (
                  <CommandItem
                    key={format.value}
                    value={format.value}
                    onSelect={() => handleFormatSelect(format)}
                    className="flex items-center py-2"
                  >
                    <format.icon className="mr-2 h-4 w-4 text-blue-600" />
                    <div className="flex flex-col">
                      <span>{format.label}</span>
                      <span className="text-xs text-muted-foreground">{format.description}</span>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedFormat.value === format.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
