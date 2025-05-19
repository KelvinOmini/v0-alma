import { Search, FileText, BookOpen, Link2, Filter, Clock, Lightbulb } from "lucide-react"

export function SearchFeatures() {
  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Search across multiple sources with natural language queries and get relevant results instantly.",
    },
    {
      icon: FileText,
      title: "Information Synthesis",
      description: "Automatically summarize and combine information from multiple sources into coherent insights.",
    },
    {
      icon: BookOpen,
      title: "Source Evaluation",
      description: "Evaluate the credibility and reliability of sources with AI-powered analysis.",
    },
    {
      icon: Link2,
      title: "Citation Generation",
      description: "Generate properly formatted citations in multiple styles (APA, MLA, Chicago, etc.).",
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Filter search results by date, source type, relevance, and other customizable criteria.",
    },
    {
      icon: Clock,
      title: "Research History",
      description: "Keep track of your research history and easily return to previous searches and findings.",
    },
    {
      icon: Lightbulb,
      title: "Insight Generation",
      description: "Discover connections and patterns across sources that might otherwise be missed.",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Research Tools</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI Search Companion combines advanced search capabilities with intelligent information processing to
              transform how you research.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm"
            >
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
