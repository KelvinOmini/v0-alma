import type { Metadata } from "next"
import { ExamHero } from "@/components/exam-hero"
import { ExamFeatures } from "@/components/exam-features"
import { ExamDemo } from "@/components/exam-demo"
import { ExamTestimonials } from "@/components/exam-testimonials"
import { ExamUseCases } from "@/components/exam-use-cases"
import { ExamComparison } from "@/components/exam-comparison"
import { ExamFaq } from "@/components/exam-faq"
import { ExamCta } from "@/components/exam-cta"
import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"

export const metadata: Metadata = {
  title: "Exam Buddy | ALMA AI",
  description: "Your personal AI study partner for exam preparation, practice quizzes, and concept explanations.",
}

export default function ExamBuddyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNavbar />
      <main className="flex-1">
        <ExamHero />
        <ExamFeatures />
        <ExamDemo />
        <ExamTestimonials />
        <ExamUseCases />
        <ExamComparison />
        <ExamFaq />
        <ExamCta />
      </main>
      <HomeFooter />
    </div>
  )
}
