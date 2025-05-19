import { UserCircle, History, Sparkles, Settings } from "lucide-react"

const personalizationFeatures = [
  {
    name: "User Profiles",
    description:
      "ALMA learns your preferences, learning style, and goals to provide personalized assistance tailored to your needs.",
    icon: UserCircle,
  },
  {
    name: "Conversation Memory",
    description:
      "ALMA remembers past interactions and builds on previous conversations for a more coherent and helpful experience.",
    icon: History,
  },
  {
    name: "Adaptive Learning",
    description:
      "The more you use ALMA, the better it understands your needs and adapts its responses and recommendations.",
    icon: Sparkles,
  },
  {
    name: "Customizable Experience",
    description:
      "Adjust settings, preferences, and agent behaviors to create your ideal learning and productivity assistant.",
    icon: Settings,
  },
]

export function FeaturePersonalization() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Personalization</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored to Your Unique Needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA adapts to your learning style, preferences, and goals to provide a personalized experience that evolves
            with you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div className="relative">
              <div className="aspect-[1/1] overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10">
                <div className="relative h-full w-full rounded-2xl bg-gray-100 p-4">
                  <div className="absolute left-4 top-4 h-24 w-24 rounded-xl bg-blue-600 p-4 text-white">
                    <UserCircle className="h-16 w-16" />
                  </div>
                  <div className="absolute bottom-12 left-12 h-32 w-64 rounded-xl bg-green-600 p-4 text-white">
                    <div className="mb-2 text-sm font-medium">Learning Preferences</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span>Visual Learning</span>
                        <div className="h-2 w-24 rounded-full bg-white/30">
                          <div className="h-2 w-20 rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Detailed Explanations</span>
                        <div className="h-2 w-24 rounded-full bg-white/30">
                          <div className="h-2 w-16 rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Practice Exercises</span>
                        <div className="h-2 w-24 rounded-full bg-white/30">
                          <div className="h-2 w-12 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-4 top-20 h-40 w-40 rounded-xl bg-purple-600 p-4 text-white">
                    <div className="mb-2 text-sm font-medium">Subject Interests</div>
                    <div className="space-y-1 text-xs">
                      <div className="rounded-md bg-white/20 px-2 py-1">Computer Science</div>
                      <div className="rounded-md bg-white/20 px-2 py-1">Mathematics</div>
                      <div className="rounded-md bg-white/20 px-2 py-1">History</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 h-28 w-28 rounded-xl bg-orange-600 p-4 text-white">
                    <History className="h-20 w-20" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-10">
                {personalizationFeatures.map((feature) => (
                  <div key={feature.name} className="relative flex flex-col gap-4 sm:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
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
