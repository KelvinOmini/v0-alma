import { BookOpen, Search, FileText, Edit, FileCheck } from "lucide-react"

const features = [
  {
    name: "Essay Structure Planning",
    description:
      "Get help organizing your thoughts with outlines, thesis statements, and logical flow for your essays and papers.",
    icon: FileText,
  },
  {
    name: "Research Assistance",
    description:
      "Find relevant sources, extract key information, and integrate research effectively into your assignments.",
    icon: Search,
  },
  {
    name: "Citation Formatting",
    description: "Generate properly formatted citations in APA, MLA, Chicago, and other styles for your bibliography.",
    icon: BookOpen,
  },
  {
    name: "Grammar & Style Checking",
    description: "Improve your writing with suggestions for grammar, clarity, conciseness, and academic tone.",
    icon: Edit,
  },
  {
    name: "Content Development",
    description:
      "Expand on your ideas with relevant examples, explanations, and analysis to strengthen your arguments.",
    icon: FileText,
  },
  {
    name: "Document Analysis",
    description:
      "Upload existing drafts for feedback on structure, content, and style with specific improvement suggestions.",
    icon: FileCheck,
  },
  {
    name: "Multi-Format Output",
    description:
      "Export your completed assignments in various formats including Word documents, PDFs, PowerPoint presentations, and more.",
    icon: FileText,
  },
]

export function AssignmentFeatures() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Assignment Helper Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Assignment Helper provides comprehensive support throughout the entire academic writing process, from
            initial brainstorming to final polishing.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
