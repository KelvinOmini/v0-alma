import { Check } from "lucide-react"

const features = [
  {
    name: "Academic Writing Assistance",
    agents: {
      assignment: true,
      career: false,
      counseling: false,
      exam: "Limited",
      search: "Research only",
    },
  },
  {
    name: "Career Guidance",
    agents: {
      assignment: false,
      career: true,
      counseling: "Limited",
      exam: false,
      search: "Research only",
    },
  },
  {
    name: "Emotional Support",
    agents: {
      assignment: false,
      career: "Limited",
      counseling: true,
      exam: "Limited",
      search: false,
    },
  },
  {
    name: "Study Planning",
    agents: {
      assignment: "Limited",
      career: false,
      counseling: false,
      exam: true,
      search: false,
    },
  },
  {
    name: "Research Capabilities",
    agents: {
      assignment: "Basic",
      career: "Industry-specific",
      counseling: "Wellness resources",
      exam: "Subject-specific",
      search: true,
    },
  },
  {
    name: "Document Analysis",
    agents: {
      assignment: true,
      career: "Resumes only",
      counseling: false,
      exam: "Study materials",
      search: true,
    },
  },
  {
    name: "Personalized Feedback",
    agents: {
      assignment: true,
      career: true,
      counseling: true,
      exam: true,
      search: "Limited",
    },
  },
]

export function AgentComparison() {
  return (
    <div id="agent-comparison" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Agent Comparison</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compare Agent Capabilities</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how each agent specializes in different areas while working together to provide comprehensive
            assistance.
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
                      Assignment Helper
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      style={{ color: "#10B981" }}
                    >
                      Career Advisor
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      style={{ color: "#EC4899" }}
                    >
                      Counselor Bot
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      style={{ color: "#8B5CF6" }}
                    >
                      Exam Buddy
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      style={{ color: "#F59E0B" }}
                    >
                      AI Search
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
                        {feature.agents.assignment === true ? (
                          <Check className="mx-auto h-5 w-5 text-blue-600" />
                        ) : feature.agents.assignment === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-500">{feature.agents.assignment}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.agents.career === true ? (
                          <Check className="mx-auto h-5 w-5 text-green-600" />
                        ) : feature.agents.career === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-500">{feature.agents.career}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.agents.counseling === true ? (
                          <Check className="mx-auto h-5 w-5 text-pink-600" />
                        ) : feature.agents.counseling === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-500">{feature.agents.counseling}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.agents.exam === true ? (
                          <Check className="mx-auto h-5 w-5 text-purple-600" />
                        ) : feature.agents.exam === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-500">{feature.agents.exam}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {feature.agents.search === true ? (
                          <Check className="mx-auto h-5 w-5 text-amber-600" />
                        ) : feature.agents.search === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-500">{feature.agents.search}</span>
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
