import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExamHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                ALMA AI Agent
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Exam Buddy</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Your personal AI study partner that helps you prepare for exams with personalized study plans, practice
                quizzes, and clear concept explanations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/dashboard/exam-buddy/dashboard">Try Exam Buddy</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-purple-100">
                <GraduationCap className="h-32 w-32 text-purple-600" />
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl bg-purple-200 p-4">
                <div className="h-full w-full rounded-lg bg-purple-400 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A+</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-xl bg-purple-200 p-4">
                <div className="h-full w-full rounded-lg bg-white p-2 shadow-md">
                  <div className="h-full w-full rounded-md bg-purple-50 flex flex-col items-center justify-center p-2">
                    <div className="w-full h-2 bg-purple-200 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-purple-200 rounded-full mb-2"></div>
                    <div className="w-1/2 h-2 bg-purple-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/4 h-20 w-20 rounded-xl bg-purple-200 p-3">
                <div className="h-full w-full rounded-lg bg-white p-2 shadow-md">
                  <div className="h-full w-full rounded-md bg-purple-50 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">Q&A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
