import { FileText, Search, MessageSquare, Award, TrendingUp, Briefcase } from "lucide-react"

const features = [
  {
    name: "Resume & Cover Letter Optimization",
    description:
      "Get personalized feedback on your resume and cover letters with tailored suggestions to highlight your strengths and match job requirements.",
    icon: FileText,
  },
  {
    name: "Job Search Strategy",
    description:
      "Receive customized job search strategies based on your skills, experience, and career goals to find opportunities that match your profile.",
    icon: Search,
  },
  {
    name: "Interview Preparation",
    description:
      "Practice with simulated interviews tailored to your industry, with real-time feedback on your responses and guidance on improvement areas.",
    icon: MessageSquare,
  },
  {
    name: "Skills Assessment",
    description:
      "Identify your strengths and skill gaps with comprehensive assessments, and get personalized recommendations for skill development.",
    icon: Award,
  },
  {
    name: "Career Path Planning",
    description:
      "Explore potential career paths based on your interests, skills, and market trends, with step-by-step guidance to achieve your goals.",
    icon: TrendingUp,
  },
  {
    name: "Networking Assistance",
    description:
      "Get help crafting networking messages, preparing for informational interviews, and building your professional presence online.",
    icon: Briefcase,
  },
]

export function CareerFeatures() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Career Development</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for career success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Career Advisor combines AI-powered insights with industry best practices to help you navigate every
            stage of your professional journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-600">
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
