import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, PenToolIcon as Tool, AlertTriangle, ExternalLink } from "lucide-react"

type ResourceType = "article" | "video" | "tool" | "crisis"

type Resource = {
  id: string
  title: string
  description: string
  type: ResourceType
  tags: string[]
  link: string
}

const resources: Resource[] = [
  {
    id: "r1",
    title: "Understanding Stress and Anxiety",
    description: "Learn about the physiological and psychological aspects of stress and anxiety.",
    type: "article",
    tags: ["stress", "anxiety", "education"],
    link: "#",
  },
  {
    id: "r2",
    title: "5-Minute Mindfulness Meditation",
    description: "A quick guided meditation to help center yourself during busy days.",
    type: "video",
    tags: ["mindfulness", "meditation", "quick"],
    link: "#",
  },
  {
    id: "r3",
    title: "Sleep Hygiene Assessment",
    description: "Evaluate your sleep habits and get personalized recommendations.",
    type: "tool",
    tags: ["sleep", "assessment", "habits"],
    link: "#",
  },
  {
    id: "r4",
    title: "Crisis Support Resources",
    description: "Immediate resources for mental health emergencies.",
    type: "crisis",
    tags: ["crisis", "emergency", "support"],
    link: "#",
  },
  {
    id: "r5",
    title: "Healthy Coping Mechanisms",
    description: "Explore effective strategies for managing difficult emotions.",
    type: "article",
    tags: ["coping", "emotions", "wellness"],
    link: "#",
  },
  {
    id: "r6",
    title: "Progressive Muscle Relaxation Guide",
    description: "Follow along with this guided relaxation technique to reduce physical tension.",
    type: "video",
    tags: ["relaxation", "stress", "physical"],
    link: "#",
  },
]

const getResourceIcon = (type: ResourceType) => {
  switch (type) {
    case "article":
      return <BookOpen className="h-5 w-5 text-blue-500" />
    case "video":
      return <Video className="h-5 w-5 text-purple-500" />
    case "tool":
      return <Tool className="h-5 w-5 text-green-500" />
    case "crisis":
      return <AlertTriangle className="h-5 w-5 text-red-500" />
  }
}

const getResourceColor = (type: ResourceType) => {
  switch (type) {
    case "article":
      return "bg-blue-50 border-blue-100"
    case "video":
      return "bg-purple-50 border-purple-100"
    case "tool":
      return "bg-green-50 border-green-100"
    case "crisis":
      return "bg-red-50 border-red-100"
  }
}

const getBadgeColor = (type: ResourceType) => {
  switch (type) {
    case "article":
      return "bg-blue-100 text-blue-800"
    case "video":
      return "bg-purple-100 text-purple-800"
    case "tool":
      return "bg-green-100 text-green-800"
    case "crisis":
      return "bg-red-100 text-red-800"
  }
}

export function WellnessResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-pink-700">Wellness Resources</CardTitle>
        <CardDescription>Curated resources to support your mental wellbeing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.id} className={`rounded-lg border p-4 ${getResourceColor(resource.type)}`}>
              <div className="mb-2 flex items-center justify-between">
                <Badge className={getBadgeColor(resource.type)}>
                  <span className="flex items-center">
                    {getResourceIcon(resource.type)}
                    <span className="ml-1">{resource.type}</span>
                  </span>
                </Badge>
              </div>
              <h3 className="font-medium">{resource.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-pink-600" asChild>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  View Resource
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
