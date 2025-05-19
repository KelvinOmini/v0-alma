const milestones = [
  {
    date: "January 2022",
    title: "ALMA Founded",
    description:
      "Dr. Sarah Chen and Michael Rodriguez establish ALMA with a vision to democratize personalized learning.",
  },
  {
    date: "June 2022",
    title: "First Prototype",
    description: "Initial version of the Assignment Helper agent is developed and tested with 50 university students.",
  },
  {
    date: "October 2022",
    title: "Seed Funding",
    description: "ALMA secures $2.5M in seed funding to expand the team and develop additional AI agents.",
  },
  {
    date: "March 2023",
    title: "Beta Launch",
    description:
      "Public beta release with three specialized agents: Assignment Helper, Exam Buddy, and Career Advisor.",
  },
  {
    date: "August 2023",
    title: "University Partnerships",
    description: "ALMA partners with 5 universities to integrate the platform into their student support services.",
  },
  {
    date: "November 2023",
    title: "Series A Funding",
    description: "ALMA raises $15M in Series A funding to scale operations and enhance AI capabilities.",
  },
  {
    date: "January 2024",
    title: "Full Platform Launch",
    description: "Official launch of the complete ALMA platform with all five specialized AI agents.",
  },
  {
    date: "April 2024",
    title: "50,000 Users Milestone",
    description: "ALMA reaches 50,000 active users across 30 countries, with a 96% satisfaction rate.",
  },
]

export function AboutTimeline() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Milestones</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From a small research project to a global educational platform, here's how ALMA has evolved over time.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Vertical line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-9 top-14 h-full w-0.5 bg-gray-200" aria-hidden="true" />
                )}

                <div className="relative flex items-start">
                  <div className="flex h-9 items-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <p className="font-medium text-blue-600">{milestone.date}</p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900 sm:ml-6 sm:mt-0">{milestone.title}</h3>
                    </div>
                    <p className="mt-2 text-base text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
