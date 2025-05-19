import { Heart, Brain, Clock, BookOpen, Users, Shield } from "lucide-react"

const features = [
  {
    name: "Emotional Support",
    description:
      "Receive empathetic responses and guidance for managing difficult emotions, with personalized coping strategies based on your specific situation.",
    icon: Heart,
  },
  {
    name: "Stress Management",
    description:
      "Learn evidence-based techniques for reducing stress, including breathing exercises, progressive muscle relaxation, and cognitive reframing.",
    icon: Brain,
  },
  {
    name: "Mindfulness Practices",
    description:
      "Access guided mindfulness exercises to help you stay present, reduce anxiety, and improve your overall mental well-being.",
    icon: Clock,
  },
  {
    name: "Educational Resources",
    description:
      "Discover curated articles, videos, and tools about mental health topics, tailored to your interests and needs.",
    icon: BookOpen,
  },
  {
    name: "Peer Support Guidance",
    description:
      "Get advice on building a support network and effectively communicating your needs to friends, family, and colleagues.",
    icon: Users,
  },
  {
    name: "Crisis Resources",
    description:
      "Access immediate resources and referrals to professional help when needed, with clear guidance on when to seek additional support.",
    icon: Shield,
  },
]

export function CounselorFeatures() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-600">Mental Wellness</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Support for your emotional well-being
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Counselor Bot combines evidence-based techniques with compassionate AI to help you navigate life's
            challenges and build resilience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-pink-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
