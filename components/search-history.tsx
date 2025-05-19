"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, ArrowRight, Trash2, Bookmark } from "lucide-react"

export function SearchHistory() {
  const recentSearches = [
    {
      id: 1,
      query: "coastal ecosystem climate change impact",
      date: "Today, 2:30 PM",
      results: 42,
      saved: false,
    },
    {
      id: 2,
      query: "machine learning applications in healthcare",
      date: "Yesterday, 10:15 AM",
      results: 78,
      saved: true,
    },
    {
      id: 3,
      query: "renewable energy policy comparison",
      date: "May 15, 2023",
      results: 56,
      saved: false,
    },
    {
      id: 4,
      query: "urban planning sustainable development",
      date: "May 12, 2023",
      results: 63,
      saved: true,
    },
    {
      id: 5,
      query: "artificial intelligence ethics",
      date: "May 10, 2023",
      results: 91,
      saved: false,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Search History</CardTitle>
          <CardDescription>View and manage your recent searches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input type="text" placeholder="Filter your search history..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Searches</SelectItem>
                <SelectItem value="saved">Saved Only</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="list">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="mt-0">
              <div className="space-y-3">
                {recentSearches.map((search) => (
                  <div
                    key={search.id}
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{search.query}</div>
                        <div className="text-sm text-gray-500">
                          {search.date} • {search.results} results
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className={`h-4 w-4 ${search.saved ? "fill-amber-500 text-amber-500" : ""}`} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-0">
              <div className="rounded-lg border p-4">
                <div className="text-center text-gray-500">Calendar view coming soon</div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Clear History</Button>
          <Button variant="outline">Export History</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Search Insights</CardTitle>
          <CardDescription>Analytics and patterns from your search history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Top Search Topics</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Climate Change</span>
                  <div className="flex w-2/3 items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-[75%] rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Artificial Intelligence</span>
                  <div className="flex w-2/3 items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-[60%] rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sustainable Development</span>
                  <div className="flex w-2/3 items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-[45%] rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Healthcare</span>
                  <div className="flex w-2/3 items-center gap-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-[30%] rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Search Activity</h3>
              <div className="h-40 w-full">
                <div className="flex h-full items-end justify-between gap-1">
                  {[15, 25, 40, 30, 20, 35, 45].map((height, index) => (
                    <div key={index} className="relative flex h-full flex-1 flex-col justify-end">
                      <div className="w-full rounded-t bg-amber-500" style={{ height: `${height}%` }}></div>
                      <div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">
                        {index === 0
                          ? "Mon"
                          : index === 1
                            ? "Tue"
                            : index === 2
                              ? "Wed"
                              : index === 3
                                ? "Thu"
                                : index === 4
                                  ? "Fri"
                                  : index === 5
                                    ? "Sat"
                                    : "Sun"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
