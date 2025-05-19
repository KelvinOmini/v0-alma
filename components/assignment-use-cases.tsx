import Image from "next/image"
import { BookOpen, FileText, Search, Edit } from "lucide-react"

const useCases = [
  {
    title: "Research Papers",
    description:
      "Get help with every stage of your research paper, from topic selection and literature review to drafting, editing, and citation.",
    icon: BookOpen,
    image: "/placeholder.svg?height=300&width=400&text=Research+Paper+Example",
  },
  {
    title: "Essays & Argumentative Writing",
    description:
      "Develop strong thesis statements, logical arguments, and compelling evidence for persuasive and analytical essays.",
    icon: FileText,
    image: "/placeholder.svg?height=300&width=400&text=Essay+Example",
  },
  {
    title: "Literature Reviews",
    description:
      "Organize and synthesize existing research, identify themes and gaps, and create comprehensive literature reviews.",
    icon: Search,
    image: "/placeholder.svg?height=300&width=400&text=Literature+Review+Example",
  },
  {
    title: "Lab Reports & Technical Writing",
    description:
      "Structure technical documents with proper formatting, clear methodology sections, and precise language.",
    icon: Edit,
    image: "/placeholder.svg?height=300&width=400&text=Technical+Writing+Example",
  },
]

export function AssignmentUseCases() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Use Cases</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perfect for All Types of Academic Writing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Assignment Helper adapts to various writing tasks across disciplines, providing specialized assistance
            for different academic formats and requirements.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="flex flex-col rounded-xl bg-white shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                    <useCase.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
              </div>
              <div className="flex-1 p-6">
                <p className="text-gray-600">{useCase.description}</p>
                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">How Assignment Helper Helps:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {useCase.title === "Research Papers" && (
                      <>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Finds credible academic sources and helps organize research</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Assists with methodology sections and data analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Ensures proper citation and formatting for academic journals</span>
                        </li>
                      </>
                    )}
                    {useCase.title === "Essays & Argumentative Writing" && (
                      <>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Develops clear thesis statements and supporting arguments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Suggests counterarguments and rebuttals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Improves logical flow and persuasive techniques</span>
                        </li>
                      </>
                    )}
                    {useCase.title === "Literature Reviews" && (
                      <>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Organizes sources by themes, methodologies, or findings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Identifies gaps and contradictions in existing research</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Creates synthesis matrices to compare different studies</span>
                        </li>
                      </>
                    )}
                    {useCase.title === "Lab Reports & Technical Writing" && (
                      <>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Structures reports with proper sections (abstract, methods, results)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Ensures precise, objective language appropriate for technical documents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>Helps describe procedures and interpret results clearly</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
