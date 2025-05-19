import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Newspaper, Briefcase } from "lucide-react"

export function SearchUseCases() {
  const useCases = [
    {
      id: "academic",
      title: "Academic Research",
      icon: BookOpen,
      description: "Streamline literature reviews and academic research",
      content: [
        {
          title: "Literature Reviews",
          description: "Quickly find, evaluate, and synthesize relevant academic papers across multiple databases.",
        },
        {
          title: "Citation Management",
          description: "Generate properly formatted citations and bibliographies in any academic style.",
        },
        {
          title: "Gap Analysis",
          description: "Identify research gaps and potential areas for original contribution.",
        },
        {
          title: "Cross-Disciplinary Connections",
          description: "Discover relevant research from adjacent fields that might otherwise be missed.",
        },
      ],
    },
    {
      id: "student",
      title: "Student Projects",
      icon: GraduationCap,
      description: "Help students find reliable sources and create better papers",
      content: [
        {
          title: "Source Evaluation",
          description: "Learn to distinguish between reliable and unreliable sources with AI-powered analysis.",
        },
        {
          title: "Research Efficiency",
          description: "Complete research assignments in less time with more comprehensive results.",
        },
        {
          title: "Information Synthesis",
          description: "Combine information from multiple sources into coherent summaries and outlines.",
        },
        {
          title: "Proper Attribution",
          description: "Ensure all sources are properly cited to maintain academic integrity.",
        },
      ],
    },
    {
      id: "journalism",
      title: "Journalism",
      icon: Newspaper,
      description: "Support fact-checking and investigative reporting",
      content: [
        {
          title: "Fact Verification",
          description: "Quickly verify claims against multiple reliable sources.",
        },
        {
          title: "Background Research",
          description: "Gather comprehensive background information on complex topics.",
        },
        {
          title: "Source Diversity",
          description: "Ensure reporting includes diverse perspectives and sources.",
        },
        {
          title: "Timeline Construction",
          description: "Build accurate event timelines from multiple news sources and reports.",
        },
      ],
    },
    {
      id: "business",
      title: "Business Intelligence",
      icon: Briefcase,
      description: "Gather market insights and competitive intelligence",
      content: [
        {
          title: "Market Analysis",
          description: "Research market trends, consumer behavior, and industry developments.",
        },
        {
          title: "Competitive Intelligence",
          description: "Monitor competitors and identify strategic opportunities.",
        },
        {
          title: "Decision Support",
          description: "Gather relevant information to support data-driven decision making.",
        },
        {
          title: "Knowledge Management",
          description: "Organize and synthesize information from internal and external sources.",
        },
      ],
    },
  ]

  return (
    <section className="py-16 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Use Cases</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How You Can Use the AI Search Companion
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore how different professionals and students use our AI Search Companion to enhance their research.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                  <useCase.icon className="h-4 w-4" />
                  <span>{useCase.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <useCase.icon className="h-5 w-5 text-amber-500" />
                      {useCase.title}
                    </CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {useCase.content.map((item, index) => (
                        <div key={index} className="rounded-lg border border-amber-200 p-4">
                          <h3 className="font-semibold text-amber-700">{item.title}</h3>
                          <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
