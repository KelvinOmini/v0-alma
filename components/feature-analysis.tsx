import { FileSearch, FileText, FileCheck, FileQuestion } from "lucide-react"

const analysisFeatures = [
  {
    name: "Document Understanding",
    description:
      "ALMA can read and comprehend various document types, extracting key information and understanding context.",
    icon: FileSearch,
  },
  {
    name: "Content Summarization",
    description: "Get concise summaries of lengthy documents, highlighting the most important points and concepts.",
    icon: FileText,
  },
  {
    name: "Quality Assessment",
    description: "Receive feedback on writing quality, structure, and content with suggestions for improvement.",
    icon: FileCheck,
  },
  {
    name: "Question Answering",
    description: "Ask specific questions about document content and receive accurate, contextual answers.",
    icon: FileQuestion,
  },
]

export function FeatureAnalysis() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Document Analysis</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Document Processing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload documents and let ALMA analyze, summarize, and extract insights to save you time and enhance your
            understanding.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:order-last">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {analysisFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200 transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/10">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Document+Analysis"
                    alt="ALMA Document Analysis"
                    className="h-auto w-full rounded-md object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 rounded-xl bg-blue-600 p-4 shadow-xl">
                  <div className="space-y-2 text-white">
                    <h4 className="font-medium">Document Analysis</h4>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center">
                        <svg
                          className="mr-1.5 h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Key points extracted
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-1.5 h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Structure analyzed
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-1.5 h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Content summarized
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
