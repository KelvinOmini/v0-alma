import { Heart, Lightbulb, Users, Shield, Globe, Sparkles } from "lucide-react"

const values = [
  {
    name: "Empathy",
    description:
      "We design with deep empathy for our users, understanding their challenges, goals, and diverse learning needs.",
    icon: Heart,
  },
  {
    name: "Innovation",
    description:
      "We continuously push the boundaries of what's possible with AI in education, seeking creative solutions to complex problems.",
    icon: Lightbulb,
  },
  {
    name: "Inclusivity",
    description:
      "We're committed to creating technology that works for everyone, regardless of background, ability, or circumstance.",
    icon: Users,
  },
  {
    name: "Integrity",
    description:
      "We maintain the highest ethical standards in our AI development, data practices, and business operations.",
    icon: Shield,
  },
  {
    name: "Impact",
    description:
      "We measure our success by the positive difference we make in our users' lives and in the broader educational landscape.",
    icon: Globe,
  },
  {
    name: "Growth Mindset",
    description:
      "We believe in the potential for continuous improvement—both for our users and for ourselves as an organization.",
    icon: Sparkles,
  },
]

export function AboutValues() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Principles That Guide Our Work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At ALMA, our values aren't just words on a wall—they're the principles that guide every decision we make,
            from product development to hiring to customer support.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
