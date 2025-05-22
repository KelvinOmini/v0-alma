import type { Metadata } from "next"
import { StudyDashboard } from "@/components/study-dashboard"

export const metadata: Metadata = {
  title: "Exam Buddy Dashboard | ALMA AI",
  description: "Your personal AI study partner for exam preparation, practice quizzes, and concept explanations.",
}

export default function ExamBuddyDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <StudyDashboard />
      </main>
    </div>
  )
}
