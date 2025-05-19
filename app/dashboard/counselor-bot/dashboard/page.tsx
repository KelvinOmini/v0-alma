import { MoodTracker } from "@/components/mood-tracker"
import { WellnessResources } from "@/components/wellness-resources"
import { WellnessExercises } from "@/components/wellness-exercises"
import { AppSidebar } from "@/components/app-sidebar"
import { HeartPulse, Calendar, BookOpen, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CounselorDashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="flex items-center text-2xl font-bold text-pink-700">
                <HeartPulse className="mr-2 h-6 w-6" />
                Counselor Bot Dashboard
              </h1>
              <p className="text-gray-600">Track your emotional wellbeing and access wellness resources</p>
            </div>
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/dashboard/counselor-bot">Chat with Counselor Bot</Link>
            </Button>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <Calendar className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Mood Tracking</h3>
                  <p className="text-sm text-gray-500">Monitor your emotional patterns</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <BookOpen className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Wellness Resources</h3>
                  <p className="text-sm text-gray-500">Access helpful articles and tools</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  <Brain className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Guided Exercises</h3>
                  <p className="text-sm text-gray-500">Practice mindfulness and relaxation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <MoodTracker />
          </div>

          <div className="mb-8">
            <WellnessExercises />
          </div>

          <div>
            <WellnessResources />
          </div>
        </div>
      </div>
    </div>
  )
}
