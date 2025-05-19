import { Brain, Calendar, Clock, FileText, Lightbulb, Target } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Personalized Study Plans",
    description: "Create customized study schedules based on your exam date, subject matter, and learning style.",
  },
  {
    icon: FileText,
    title: "Practice Quizzes",
    description: "Generate unlimited practice questions with detailed explanations tailored to your course material.",
  },
  {
    icon: Lightbulb,
    title: "Concept Explanations",
    description: "Get clear, concise explanations of complex topics with examples and visual aids.",
  },
  {
    icon: Target,
    title: "Targeted Weaknesses",
    description: "Identify and focus on your knowledge gaps with adaptive learning technology.",
  },
  {
    icon: Brain,
    title: "Memory Techniques",
    description: "Learn effective memorization strategies like spaced repetition and active recall.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Optimize your study sessions with proven time management techniques and timers.",
  },
]

export function ExamFeatures() {
  return (
    <section className="py-20" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Complete Exam Preparation Partner
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Exam Buddy combines AI-powered learning tools with proven study techniques to help you achieve your best
              results.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border border-purple-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-lg bg-purple-100 p-3">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
