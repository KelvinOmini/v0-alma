import { Check, X } from "lucide-react"

const features = [
  {
    name: "Essay Structure Planning",
    assignment: true,
    generic: "Limited",
    human: true,
  },
  {
    name: "Research Assistance",
    assignment: true,
    generic: "Basic",
    human: "Limited",
  },
  {
    name: "Citation Formatting",
    assignment: true,
    generic: "Basic",
    human: true,
  },
  {
    name: "Grammar & Style Checking",
    assignment: true,
    generic: true,
    human: true,
  },
  {
    name: "Content Development",
    assignment: true,
    generic: "Limited",
    human: true,
  },
  {
    name: "Document Analysis",
    assignment: true,
    generic: false,
    human: true,
  },
  {
    name: "24/7 Availability",
    assignment: true,
    generic: true,
    human: false,
  },
  {
    name: "Personalized Learning",
    assignment: true,
    generic: false,
    human: "Varies",
  },
  {
    name: "Instant Feedback",
    assignment: true,
    generic: "Limited",
    human: false,
  },
]

export function AssignmentComparison() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Comparison</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Assignment Helper Compares
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how ALMA's Assignment Helper compares to generic AI assistants and traditional writing support.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      style={{ color: "#3B82F6" }}
                    >
                      ALMA Assignment Helper
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      Generic AI Assistant
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      Human Writing Support
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {feature.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.assignment === true ? (
                          <Check className="mx-auto h-5 w-5 text-blue-600" />
                        ) : feature.assignment === false ? (
                          <X className="mx-auto h-5 w-5 text-gray-400" />
                        ) : (
                          <span className="text-blue-600 font-medium">{feature.assignment}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.generic === true ? (
                          <Check className="mx-auto h-5 w-5 text-green-600" />
                        ) : feature.generic === false ? (
                          <X className="mx-auto h-5 w-5 text-gray-400" />
                        ) : (
                          <span className="text-gray-500">{feature.generic}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.human === true ? (
                          <Check className="mx-auto h-5 w-5 text-purple-600" />
                        ) : feature.human === false ? (
                          <X className="mx-auto h-5 w-5 text-gray-400" />
                        ) : (
                          <span className="text-gray-500">{feature.human}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
