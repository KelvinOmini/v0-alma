"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Search, Filter, FileText, Link2, Bookmark, Share2 } from "lucide-react"

export function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeResultTab, setActiveResultTab] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  const mockResults = [
    {
      title: "The Impact of Climate Change on Coastal Ecosystems",
      source: "Environmental Science Journal",
      authors: "Smith, J., Johnson, A.",
      year: "2022",
      snippet:
        "This comprehensive study examines how rising sea levels and increasing temperatures are affecting coastal ecosystems worldwide, with particular focus on coral reefs and mangrove forests.",
      type: "academic",
      reliability: 95,
    },
    {
      title: "Coastal Ecosystem Degradation: A Global Crisis",
      source: "Marine Biology Review",
      authors: "Chen, L., Williams, P.",
      year: "2021",
      snippet:
        "The paper presents evidence of accelerating degradation in coastal ecosystems, identifying pollution, overfishing, and climate change as the primary contributing factors.",
      type: "academic",
      reliability: 92,
    },
    {
      title: "Protecting Our Coasts: Policy Approaches to Ecosystem Conservation",
      source: "Environmental Policy Institute",
      authors: "Garcia, M., et al.",
      year: "2023",
      snippet:
        "This policy brief outlines various regulatory and incentive-based approaches to coastal ecosystem protection, evaluating their effectiveness across different regions.",
      type: "report",
      reliability: 88,
    },
    {
      title: "Coastal Communities Adapt to Changing Ecosystems",
      source: "National Geographic",
      authors: "Thompson, R.",
      year: "2022",
      snippet:
        "This article explores how coastal communities around the world are adapting to changes in local ecosystems, highlighting innovative approaches to sustainable coexistence.",
      type: "article",
      reliability: 85,
    },
    {
      title: "Economic Valuation of Coastal Ecosystem Services",
      source: "Journal of Environmental Economics",
      authors: "Brown, K., Davis, S.",
      year: "2020",
      snippet:
        "This research provides a comprehensive economic valuation of services provided by healthy coastal ecosystems, including storm protection, carbon sequestration, and tourism value.",
      type: "academic",
      reliability: 90,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Advanced Search</CardTitle>
          <CardDescription>Search across multiple sources with natural language queries</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your research question or keywords..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-amber-500 hover:bg-amber-600" disabled={isSearching}>
                {isSearching ? "Searching..." : "Search"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 grid gap-6 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>Source Types</Label>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="academic" defaultChecked />
                      <Label htmlFor="academic">Academic Journals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="books" defaultChecked />
                      <Label htmlFor="books">Books</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="news" defaultChecked />
                      <Label htmlFor="news">News Articles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reports" defaultChecked />
                      <Label htmlFor="reports">Reports</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <RadioGroup defaultValue="any">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any">Any time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year" id="year" />
                      <Label htmlFor="year">Past year</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5years" id="5years" />
                      <Label htmlFor="5years">Past 5 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom range</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Minimum Reliability Score</Label>
                  <Slider defaultValue={[70]} max={100} step={5} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sort Results By</Label>
                  <Select defaultValue="relevance">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="date">Date (newest first)</SelectItem>
                      <SelectItem value="date-asc">Date (oldest first)</SelectItem>
                      <SelectItem value="reliability">Reliability Score</SelectItem>
                      <SelectItem value="citations">Citation Count</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Advanced Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="synthesis" className="cursor-pointer">
                        Auto-synthesize results
                      </Label>
                      <Switch id="synthesis" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="citations" className="cursor-pointer">
                        Generate citations
                      </Label>
                      <Switch id="citations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="evaluation" className="cursor-pointer">
                        Evaluate source credibility
                      </Label>
                      <Switch id="evaluation" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {showResults && (
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Search Results</CardTitle>
              <CardDescription>
                Found {mockResults.length} results for "{searchQuery}"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" value={activeResultTab} onValueChange={setActiveResultTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Results</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="space-y-4">
                    {mockResults.map((result, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-amber-700">{result.title}</h3>
                            <div className="mt-1 text-sm text-gray-500">
                              {result.authors} • {result.source} • {result.year}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">
                            <span>{result.reliability}%</span>
                            <span>reliable</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">{result.snippet}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <FileText className="mr-1 h-3.5 w-3.5" />
                            <span>View</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            <Link2 className="mr-1 h-3.5 w-3.5" />
                            <span>Cite</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            <Bookmark className="mr-1 h-3.5 w-3.5" />
                            <span>Save</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            <Share2 className="mr-1 h-3.5 w-3.5" />
                            <span>Share</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="academic" className="mt-0">
                  <div className="space-y-4">
                    {mockResults
                      .filter((result) => result.type === "academic")
                      .map((result, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-amber-700">{result.title}</h3>
                              <div className="mt-1 text-sm text-gray-500">
                                {result.authors} • {result.source} • {result.year}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">
                              <span>{result.reliability}%</span>
                              <span>reliable</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-700">{result.snippet}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <FileText className="mr-1 h-3.5 w-3.5" />
                              <span>View</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Link2 className="mr-1 h-3.5 w-3.5" />
                              <span>Cite</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Bookmark className="mr-1 h-3.5 w-3.5" />
                              <span>Save</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Share2 className="mr-1 h-3.5 w-3.5" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="articles" className="mt-0">
                  <div className="space-y-4">
                    {mockResults
                      .filter((result) => result.type === "article")
                      .map((result, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-amber-700">{result.title}</h3>
                              <div className="mt-1 text-sm text-gray-500">
                                {result.authors} • {result.source} • {result.year}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">
                              <span>{result.reliability}%</span>
                              <span>reliable</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-700">{result.snippet}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <FileText className="mr-1 h-3.5 w-3.5" />
                              <span>View</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Link2 className="mr-1 h-3.5 w-3.5" />
                              <span>Cite</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Bookmark className="mr-1 h-3.5 w-3.5" />
                              <span>Save</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Share2 className="mr-1 h-3.5 w-3.5" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="reports" className="mt-0">
                  <div className="space-y-4">
                    {mockResults
                      .filter((result) => result.type === "report")
                      .map((result, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-amber-700">{result.title}</h3>
                              <div className="mt-1 text-sm text-gray-500">
                                {result.authors} • {result.source} • {result.year}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">
                              <span>{result.reliability}%</span>
                              <span>reliable</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-700">{result.snippet}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <FileText className="mr-1 h-3.5 w-3.5" />
                              <span>View</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Link2 className="mr-1 h-3.5 w-3.5" />
                              <span>Cite</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Bookmark className="mr-1 h-3.5 w-3.5" />
                              <span>Save</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <Share2 className="mr-1 h-3.5 w-3.5" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
              </div>
              <Button variant="outline">Next</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Information Synthesis</CardTitle>
              <CardDescription>AI-generated summary of key findings from multiple sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-amber-50 p-4 text-gray-800">
                <h3 className="mb-3 font-semibold">Key Findings on Coastal Ecosystem Impact</h3>
                <div className="space-y-3">
                  <p>
                    Based on the analysis of multiple sources, there is strong consensus that coastal ecosystems are
                    experiencing significant degradation due to climate change, with rising sea levels and increasing
                    temperatures being primary factors. Studies from 2020-2023 highlight the following key points:
                  </p>
                  <ol className="ml-5 list-decimal space-y-2">
                    <li>
                      <strong>Accelerating Degradation:</strong> Multiple studies document an acceleration in the
                      degradation of coastal ecosystems worldwide, particularly affecting coral reefs and mangrove
                      forests.
                    </li>
                    <li>
                      <strong>Multiple Stressors:</strong> While climate change is a significant factor, pollution and
                      overfishing are also major contributors to ecosystem decline, creating compounding effects.
                    </li>
                    <li>
                      <strong>Economic Impact:</strong> Research quantifies the economic value of coastal ecosystem
                      services, including storm protection, carbon sequestration, and tourism, highlighting the economic
                      case for conservation.
                    </li>
                    <li>
                      <strong>Policy Approaches:</strong> Recent policy analyses evaluate various regulatory and
                      incentive-based approaches to coastal protection, with evidence suggesting that combined
                      approaches are most effective.
                    </li>
                    <li>
                      <strong>Community Adaptation:</strong> Case studies document how coastal communities are
                      developing innovative approaches to adapt to changing ecosystems while promoting sustainable
                      practices.
                    </li>
                  </ol>
                  <p>
                    There are some knowledge gaps in the current research, particularly regarding the effectiveness of
                    restoration efforts and the potential for ecosystem recovery under different climate scenarios.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-1 h-3.5 w-3.5" />
                  <span>Export</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-1 h-3.5 w-3.5" />
                  <span>Save</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-1 h-3.5 w-3.5" />
                  <span>Share</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
