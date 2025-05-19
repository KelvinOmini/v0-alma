import { MessageSquare, Mic, FileText, Globe } from "lucide-react"

const multimodalFeatures = [
  {
    name: "Text Interaction",
    description:
      "Engage in natural, conversational text exchanges with ALMA's AI agents. Ask questions, request assistance, or discuss complex topics with ease.",
    icon: MessageSquare,
    color: "#3B82F6",
  },
  {
    name: "Voice Input & Output",
    description:
      "Speak naturally to ALMA and receive spoken responses. Perfect for hands-free operation or accessibility needs.",
    icon: Mic,
    color: "#10B981",
  },
  {
    name: "Document Processing",
    description:
      "Upload documents, images, and PDFs for analysis. ALMA can extract information, answer questions about content, and provide summaries.",
    icon: FileText,
    color: "#8B5CF6",
  },
  {
    name: "Web Browsing",
    description:
      "ALMA can browse the web to find information, verify facts, and gather resources to provide comprehensive assistance.",
    icon: Globe,
    color: "#F59E0B",
  },
]

export function FeatureMultimodal() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Multimodal Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Interact Your Way</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA offers multiple ways to interact, making it accessible and convenient for various situations and
            preferences.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Multimodal+Interface"
                  alt="ALMA Multimodal Interface"
                  className="h-auto w-full rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="aspect-[4/3] w-64 overflow-hidden rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Voice+Interface"
                    alt="ALMA Voice Interface"
                    className="h-auto w-full rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-12">
                {multimodalFeatures.map((feature) => (
                  <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <h3 className="text-xl font-semibold leading-8 text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
