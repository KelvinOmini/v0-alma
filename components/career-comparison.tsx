import { Check, X } from "lucide-react"

const features = [
  {
    name: "Personalized career path planning",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "24/7 availability",
    careerAdvisor: true,
    generalAI: true,
    humanCoach: false,
  },
  {
    name: "Industry-specific resume optimization",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "Real-time interview practice",
    careerAdvisor: true,
    generalAI: true,
    humanCoach: true,
  },
  {
    name: "Personalized skill development plans",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "Up-to-date job market insights",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "Unlimited sessions/questions",
    careerAdvisor: true,
    generalAI: true,
    humanCoach: false,
  },
  {
    name: "ATS-optimized resume formatting",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "Salary negotiation coaching",
    careerAdvisor: true,
    generalAI: false,
    humanCoach: true,
  },
  {
    name: "Personal network connections",
    careerAdvisor: false,
    generalAI: false,
    humanCoach: true,
  },
]

export function CareerComparison() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Comparison</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How our Career Advisor compares
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how ALMA's specialized Career Advisor compares to general AI assistants and traditional career coaching.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-300 border-b border-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Feature
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 border-l border-gray-200"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    ALMA Career Advisor
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 border-l border-gray-200"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                    General AI Assistant
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 border-l border-gray-200"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    Human Career Coach
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature) => (
                <tr key={feature.name}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{feature.name}</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-500 border-l border-gray-200">
                    {feature.careerAdvisor ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-3 py-4 text-center text-sm text-gray-500 border-l border-gray-200">
                    {feature.generalAI ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-3 py-4 text-center text-sm text-gray-500 border-l border-gray-200">
                    {feature.humanCoach ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
