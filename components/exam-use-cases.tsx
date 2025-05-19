import { BookOpen, GraduationCap, Award, Clock } from "lucide-react"

const useCases = [
  {
    icon: BookOpen,
    title: "Daily Study Sessions",
    description:
      "Optimize your regular study routine with spaced repetition, active recall techniques, and progress tracking to maximize retention and understanding.",
    color: "bg-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: GraduationCap,
    title: "Standardized Test Prep",
    description:
      "Prepare for SAT, ACT, GRE, MCAT, LSAT and other standardized tests with specialized practice questions and test-taking strategies.",
    color: "bg-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Award,
    title: "Final Exam Preparation",
    description:
      "Comprehensive review of semester material with focus on high-yield topics, practice exams, and last-minute study guides for optimal performance.",
    color: "bg-violet-600",
    bgColor: "bg-violet-50",
  },
  {
    icon: Clock,
    title: "Quick Concept Mastery",
    description:
      "Rapidly understand difficult concepts with clear explanations, visual aids, and real-world examples that make complex ideas accessible.",
    color: "bg-fuchsia-600",
    bgColor: "bg-fuchsia-50",
  },
]

export function ExamUseCases() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Use Cases</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Students Use Exam Buddy</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From daily study sessions to intensive exam preparation, Exam Buddy adapts to your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border border-purple-200 bg-white p-6 shadow-sm"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${useCase.color}`}>
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{useCase.title}</h3>
                <p className="text-sm text-gray-500">{useCase.description}</p>
              </div>
              <div className={`rounded-lg ${useCase.bgColor} p-4`}>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Personalized approach for your learning style</li>
                  <li>Adaptive difficulty based on your progress</li>
                  <li>Immediate feedback and explanations</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
