import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to ALMA's core features",
    features: {
      "Assignment Helper": "Limited",
      "Career Advisor": "Limited",
      "Counselor Bot": "Limited",
      "Exam Buddy": "Limited",
      "AI Search Companion": "Limited",
      "Document Upload": "Up to 5 per day",
      "Voice Interaction": false,
      "Conversation Memory": "24 hours",
      Personalization: "Basic",
      "API Access": false,
    },
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Full access to all ALMA features",
    popular: true,
    features: {
      "Assignment Helper": true,
      "Career Advisor": true,
      "Counselor Bot": true,
      "Exam Buddy": true,
      "AI Search Companion": true,
      "Document Upload": "Unlimited",
      "Voice Interaction": true,
      "Conversation Memory": "6 months",
      Personalization: "Advanced",
      "API Access": false,
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for organizations",
    features: {
      "Assignment Helper": true,
      "Career Advisor": true,
      "Counselor Bot": true,
      "Exam Buddy": true,
      "AI Search Companion": true,
      "Document Upload": "Unlimited",
      "Voice Interaction": true,
      "Conversation Memory": "Unlimited",
      Personalization: "Advanced",
      "API Access": true,
    },
  },
]

export function FeatureComparison() {
  return (
    <div id="feature-comparison" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing & Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the Right Plan for You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compare our plans to find the perfect fit for your needs, whether you're a student, professional, or
            organization.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.popular ? "relative lg:z-10 lg:shadow-xl" : ""
              } ${planIdx === 0 ? "lg:rounded-r-none" : ""} ${
                planIdx === plans.length - 1 ? "lg:rounded-l-none" : ""
              } ${planIdx === 1 ? "lg:rounded-none" : ""}`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-5 right-8 z-10 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">{plan.name}</h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-sm font-semibold leading-6 text-gray-600">{plan.period}</span>}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {Object.entries(plan.features).map(([feature, enabled]) => (
                    <li key={feature} className="flex gap-x-3">
                      {enabled === true ? (
                        <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      ) : enabled === false ? (
                        <X className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                      ) : (
                        <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      )}
                      <span>
                        {feature} {typeof enabled === "string" && <span className="text-gray-400">({enabled})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
