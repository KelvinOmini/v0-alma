import type { Metadata } from "next"
import { CareerHero } from "@/components/career-hero"
import { CareerFeatures } from "@/components/career-features"
import { CareerDemo } from "@/components/career-demo"
import { CareerTestimonials } from "@/components/career-testimonials"
import { CareerUseCases } from "@/components/career-use-cases"
import { CareerComparison } from "@/components/career-comparison"
import { CareerFaq } from "@/components/career-faq"
import { CareerCta } from "@/components/career-cta"
import { HomeFooter } from "@/components/home-footer"
import { HomeNavbar } from "@/components/home-navbar"

export const metadata: Metadata = {
  title: "Career Advisor | ALMA AI",
  description:
    "Get personalized career guidance, resume feedback, and interview preparation with ALMA's Career Advisor.",
}

export default function CareerAdvisorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNavbar />
      <main className="flex-1">
        <CareerHero />
        <CareerFeatures />
        <CareerDemo />
        <CareerTestimonials />
        <CareerUseCases />
        <CareerComparison />
        <CareerFaq />
        <CareerCta />
      </main>
      <HomeFooter />
    </div>
  )
}
