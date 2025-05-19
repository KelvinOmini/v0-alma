"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, BookOpen, FileText, Globe, Video } from "lucide-react"

export function CitationGenerator() {
  const [citationStyle, setCitationStyle] = useState("apa")
  const [sourceType, setSourceType] = useState("journal")
  const [generatedCitation, setGeneratedCitation] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateCitation = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate citation generation
    setTimeout(() => {
      let citation = ""

      if (sourceType === "journal") {
        if (citationStyle === "apa") {
          citation =
            "Smith, J., & Johnson, A. (2022). The impact of climate change on coastal ecosystems. Environmental Science Journal, 45(3), 112-128. https://doi.org/10.xxxx/xxxx"
        } else if (citationStyle === "mla") {
          citation =
            "Smith, James, and Alice Johnson. \"The Impact of Climate Change on Coastal Ecosystems.\" Environmental Science Journal, vol. 45, no. 3, 2022, pp. 112-28."
        } else if (citationStyle === "chicago") {
          citation =
            "Smith, James, and Alice Johnson. \"The Impact of Climate Change on Coastal Ecosystems.\" Environmental Science Journal 45, no. 3 (2022): 112-28."
        }
      } else if (sourceType === "book") {
        if (citationStyle === "apa") {
          citation =
            "Williams, R. (2021). Climate science: A comprehensive guide. University Press."
        } else if (citationStyle === "mla") {
          citation =
            "Williams, Robert. Climate Science: A Comprehensive Guide. University Press, 2021."
        } else if (citationStyle === "chicago") {
          citation =
            "Williams, Robert. Climate Science: A Comprehensive Guide. University Press, 2021."
        }
      } else if (sourceType === "website") {
        if (citationStyle === "apa") {
          citation =
            "Environmental Protection Agency. (2023, January 15). Climate impacts on coastal areas. https://www.epa.gov/climate-impacts/climate-impacts-coastal-areas"
        } else if (citationStyle === "mla") {
          citation =
            "\"Climate Impacts on Coastal Areas.\" Environmental Protection Agency, 15 Jan. 2023, www.epa.gov/climate-impacts/climate-impacts-coastal-areas."
        } else if (citationStyle === "chicago") {
          citation =
            "Environmental Protection Agency. \"Climate Impacts on Coastal Areas.\" Last modified January 15, 2023. https://www.epa.gov/climate-impacts/climate-impacts-coastal-areas."
        }
      }

      setGeneratedCitation(citation)
      setIsGenerating(false)
    }, 1000)
  }

  const sourceTypeIcons = {
    journal: FileText,
    book: BookOpen,
    website: Globe,
    video: Video
  }

  const SourceIcon = sourceTypeIcons[sourceType as keyof typeof sourceTypeIcons]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Citation Generator</CardTitle>
          <CardDescription>
            Generate properly formatted citations in multiple styles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerateCitation} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="citation-style">Citation Style</Label>
                <Select
                  value={citationStyle}
                  onValueChange={setCitationStyle}
                >
                  <SelectTrigger id="citation-style">
                    <SelectValue placeholder="Select citation style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apa">APA 7th Edition</SelectItem>
                    <SelectItem value="mla">MLA 9th Edition</SelectItem>
                    <SelectItem value="chicago">Chicago 17th Edition</SelectItem>
                    <SelectItem value="harvard">Harvard</SelectItem>
                    <SelectItem value="ieee">IEEE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="source-type">Source Type</Label>
                <Select
                  value={sourceType}
                  onValueChange={setSourceType}
                >
                  <SelectTrigger id="source-type">
                    <SelectValue placeholder="Select source type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="journal">Journal Article</SelectItem>
                    <SelectItem value="book">Book</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="newspaper">Newspaper</SelectItem>
                    <SelectItem value="report">Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs value={sourceType} onValueChange={setSourceType} className="mt-6">
              <TabsList className="mb-4">
                <TabsTrigger value="journal">Journal</TabsTrigger>
                <TabsTrigger value="book">Book</TabsTrigger>
                <TabsTrigger value="website">Website</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
              </TabsList>

              <TabsContent value="journal" className="mt-0 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="journal-title">Journal Title</Label>
                    <Input id="journal-title" placeholder="Environmental Science Journal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-title">Article Title</Label>
                    <Input id="article-title" placeholder="The Impact of Climate Change on Coastal Ecosystems" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-authors">Authors</Label>
                    <Input id="journal-authors" placeholder="Smith, J., Johnson, A." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-year">Year</Label>
                    <Input id="journal-year" placeholder="2022" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-volume">Volume</Label>
                    <Input id="journal-volume" placeholder="45" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-issue">Issue</Label>
                    <Input id="journal-issue" placeholder="3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-pages">Pages</Label>
                    <Input id="journal-pages" placeholder="112-128" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="journal-doi">DOI</Label>
                    <Input id="journal-doi" placeholder="10.xxxx/xxxx" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="book" className="mt-0 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="book-title">Book Title</Label>
                    <Input id="book-title" placeholder="Climate Science: A Comprehensive Guide" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-authors">Authors/Editors</Label>
                    <Input id="book-authors" placeholder="Williams, R." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-year">Year</Label>
                    <Input id="book-year" placeholder="2021" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-publisher">Publisher</Label>
                    <Input id="book-publisher" placeholder="University Press" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-city">City</Label>
                    <Input id="book-city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-edition">Edition</Label>
                    <Input id="book-edition" placeholder="2nd" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="website" className="mt-0 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="website-title">Page Title</Label>
                    <Input id="website-title" placeholder="Climate Impacts on Coastal Areas" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website-author">Author/Organization</Label>
                    <Input id="website-author" placeholder="Environmental Protection Agency" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website-date">Publication/Update Date</Label>
                    <Input id="website-date" placeholder="2023-01-15" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website-url">URL</Label>
                    <Input id="website-url" placeholder="https://www.epa.gov/climate-impacts/climate-impacts-coastal-areas" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website-accessed">Date Accessed</Label>
                    <Input id="website-accessed" placeholder="2023-05-20" type="date" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="video" className="mt-0 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="video-title">Video Title</Label>
                    <Input id="video-title" placeholder="Understanding Climate Change" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-creator">Creator/Channel</Label>
                    <Input id="video-creator" placeholder="ScienceExplained" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-date">Upload Date</Label>
                    <Input id="video-date" placeholder="2022-06-15" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-platform">Platform</Label>
                    <Input id="video-platform" placeholder="YouTube" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-url">URL</Label>
                    <Input id="video-url" placeholder="https://www.youtube.com/watch?v=xxxxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-accessed">Date Accessed</Label>
                    <Input id="video-accessed" placeholder="2023-05-20" type="date" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600"
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Citation"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {generatedCitation && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Generated Citation</CardTitle>
                <CardDescription>
                  {citationStyle.toUpperCase()} format for {sourceType}
                </CardDescription>
              </div>
              <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                <SourceIcon className="h-5 w-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border bg-gray-50 p-4">
              <div className="font-mono text-sm">{generatedCitation}</div>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-semibold">In-Text Citation</h3>
              <div className="rounded-lg border bg-gray-50 p-3">
                <div className="font-mono text-sm">
                  {citationStyle === "apa"
                    ? "(Smith & Johnson, 2022)"
                    : citationStyle === "mla"
                    ? "(Smith and Johnson 112)"
                    : "(Smith and Johnson 2022, 115)"}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
            </div>
            <Select defaultValue={citationStyle}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Citation style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apa">APA 7th Edition</SelectItem>
                <SelectItem value="mla">MLA 9th Edition</SelectItem>
                <SelectItem value="chicago">Chicago 17th Edition</SelectItem>
                <SelectItem value="harvard">Harvard</SelectItem>
                <SelectItem value="ieee">IEEE</SelectItem>
              </SelectContent>
            </Select>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Citation Management</CardTitle>
          <CardDescription>
            Manage your citations and create bibliographies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold">Save\
