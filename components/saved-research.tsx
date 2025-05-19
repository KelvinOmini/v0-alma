"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, FolderOpen, FileText, Plus, Edit, Trash2, Share2 } from "lucide-react"

export function SavedResearch() {
  const [showNewCollectionDialog, setShowNewCollectionDialog] = useState(false)

  const collections = [
    {
      id: 1,
      name: "Climate Change Research",
      description: "Research on climate change impacts and mitigation strategies",
      items: 12,
      lastUpdated: "Today",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "AI Ethics",
      description: "Materials on ethical considerations in artificial intelligence",
      items: 8,
      lastUpdated: "Yesterday",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 3,
      name: "Healthcare Innovation",
      description: "Research on recent healthcare technology innovations",
      items: 15,
      lastUpdated: "3 days ago",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      name: "Urban Planning",
      description: "Sustainable urban development and planning resources",
      items: 7,
      lastUpdated: "1 week ago",
      color: "bg-amber-100 text-amber-800",
    },
  ]

  const savedItems = [
    {
      id: 1,
      title: "The Impact of Climate Change on Coastal Ecosystems",
      type: "Article",
      source: "Environmental Science Journal",
      savedDate: "Today",
      collection: "Climate Change Research",
    },
    {
      id: 2,
      title: "Ethical Frameworks for AI Development",
      type: "Research Paper",
      source: "Journal of AI Ethics",
      savedDate: "Yesterday",
      collection: "AI Ethics",
    },
    {
      id: 3,
      title: "Telemedicine Adoption Patterns Post-Pandemic",
      type: "Report",
      source: "Healthcare Policy Institute",
      savedDate: "3 days ago",
      collection: "Healthcare Innovation",
    },
    {
      id: 4,
      title: "Urban Green Spaces and Mental Health",
      type: "Study",
      source: "Urban Planning Review",
      savedDate: "1 week ago",
      collection: "Urban Planning",
    },
    {
      id: 5,
      title: "Sea Level Rise Projections 2030-2050",
      type: "Data Analysis",
      source: "Climate Research Center",
      savedDate: "1 week ago",
      collection: "Climate Change Research",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Saved Research</CardTitle>
              <CardDescription>Organize and manage your saved research materials</CardDescription>
            </div>
            <Dialog open={showNewCollectionDialog} onOpenChange={setShowNewCollectionDialog}>
              <DialogTrigger asChild>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  <Plus className="mr-1 h-4 w-4" />
                  New Collection
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Collection</DialogTitle>
                  <DialogDescription>Create a new collection to organize your research materials.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Collection Name</Label>
                    <Input id="name" placeholder="Enter collection name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter collection description" />
                  </div>
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <div className="flex gap-2">
                      {["bg-red-100", "bg-amber-100", "bg-green-100", "bg-blue-100", "bg-purple-100"].map(
                        (color, index) => (
                          <div
                            key={index}
                            className={`h-8 w-8 cursor-pointer rounded-full ${color} border-2 ${
                              index === 1 ? "border-amber-500" : "border-transparent"
                            }`}
                          ></div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewCollectionDialog(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-amber-500 hover:bg-amber-600" onClick={() => setShowNewCollectionDialog(false)}>
                    Create Collection
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input type="text" placeholder="Search saved items..." className="pl-9" />
            </div>
          </div>

          <Tabs defaultValue="collections">
            <TabsList className="mb-4">
              <TabsTrigger value="collections">Collections</TabsTrigger>
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="recent">Recently Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="collections" className="mt-0">
              <div className="grid gap-4 sm:grid-cols-2">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="flex flex-col rounded-lg border p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className={`rounded-full ${collection.color} px-2 py-1 text-xs`}>
                        {collection.items} items
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-amber-500" />
                      <h3 className="font-semibold">{collection.name}</h3>
                    </div>
                    <p className="mb-3 text-sm text-gray-500">{collection.description}</p>
                    <div className="mt-auto text-xs text-gray-400">Last updated: {collection.lastUpdated}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-3">
                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-500">
                          {item.type} • {item.source} • Saved: {item.savedDate}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <div className="space-y-3">
                {savedItems
                  .filter((item) => item.savedDate === "Today" || item.savedDate === "Yesterday")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-gray-500">
                            {item.type} • {item.source} • Saved: {item.savedDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Import</Button>
          <Button variant="outline">Export All</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
