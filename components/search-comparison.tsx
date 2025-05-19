import { CheckIcon, XIcon } from "lucide-react"

export function SearchComparison() {
  const features = [
    "Advanced natural language search",
    "Multi-source information synthesis",
    "Source credibility evaluation",
    "Citation generation",
    "Research organization tools",
    "Personalized recommendations",
    "Cross-disciplinary connections",
    "Visual information mapping",
  ]

  const products = [
    {
      name: "AI Search Companion",
      description: "Our comprehensive research assistant",
      features: [true, true, true, true, true, true, true, true],
    },
    {
      name: "Traditional Search Engines",
      description: "Standard web search tools",
      features: [false, false, false, false, false, false, false, false],
    },
    {
      name: "Academic Databases",
      description: "Specialized research repositories",
      features: [false, false, true, true, false, false, false, false],
    },
    {
      name: "Generic AI Assistants",
      description: "General-purpose AI tools",
      features: [true, false, false, false, false, true, false, false],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Comparison</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Compare</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how the AI Search Companion compares to traditional research tools and generic AI assistants.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl overflow-auto py-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b p-4 text-left font-medium">Features</th>
                {products.map((product, index) => (
                  <th key={index} className="border-b p-4 text-left font-medium">
                    <div className="font-bold">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.description}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className={featureIndex % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="border-b p-4">{feature}</td>
                  {products.map((product, productIndex) => (
                    <td key={productIndex} className="border-b p-4">
                      {product.features[featureIndex] ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
