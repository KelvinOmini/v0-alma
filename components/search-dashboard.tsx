"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchInterface } from "@/components/search-interface"
import { SearchHistory } from "@/components/search-history"
import { SavedResearch } from "@/components/saved-research"
import { SourceEvaluator } from "@/components/source-evaluator"
import { CitationGenerator } from "@/components/citation-generator"
import { ResearchOrganizer } from "@/components/research-organizer"
import { Button } from "@/components/ui/button"
import { Search, Clock, Bookmark, FileCheck, Link2, FolderKanban } from "lucide-react"

export function SearchDashboard() {
  const [activeTab, setActiveTab] = useState("search")

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">AI Search Companion</h1>
        <p className="text-gray-500">Find, synthesize, and organize information from multiple sources</p>
      </div>

      <Tabs defaultValue="search" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <TabsList className="grid grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">Search</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden md:inline">History</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              <span className="hidden md:inline">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="evaluate" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              <span className="hidden md:inline">Evaluate</span>
            </TabsTrigger>
            <TabsTrigger value="cite" className="flex items-center gap-2">
              <Link2 className="h-4 w-4" />
              <span className="hidden md:inline">Cite</span>
            </TabsTrigger>
            <TabsTrigger value="organize" className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4" />
              <span className="hidden md:inline">Organize</span>
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Settings
            </Button>
            <Button variant="outline" size="sm">
              Help
            </Button>
          </div>
        </div>

        <TabsContent value="search" className="mt-0">
          <SearchInterface />
        </TabsContent>

        <TabsContent value="history" className="mt-0">
          <SearchHistory />
        </TabsContent>

        <TabsContent value="saved" className="mt-0">
          <SavedResearch />
        </TabsContent>

        <TabsContent value="evaluate" className="mt-0">
          <SourceEvaluator />
        </TabsContent>

        <TabsContent value="cite" className="mt-0">
          <CitationGenerator />
        </TabsContent>

        <TabsContent value="organize" className="mt-0">
          <ResearchOrganizer />
        </TabsContent>
      </Tabs>
    </div>
  )
}
