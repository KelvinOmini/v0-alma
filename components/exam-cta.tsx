import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function ExamCta() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-white px-3 py-1 text-sm">
              <GraduationCap className="mr-1 h-4 w-4 text-purple-600" />
              <span className="text-purple-700">Ace Your Exams</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Study Experience?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of students who have improved their grades and reduced study stress with Exam Buddy.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/dashboard/exam-buddy/dashboard">Try Exam Buddy Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/agents">Explore Other Agents</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
