import type { Metadata } from "next"
import { CounselorHero } from "@/components/counselor-hero"
import { CounselorFeatures } from "@/components/counselor-features"
import { CounselorDemo } from "@/components/counselor-demo"
import { CounselorTestimonials } from "@/components/counselor-testimonials"
import { CounselorUseCases } from "@/components/counselor-use-cases"
import { CounselorComparison } from "@/components/counselor-comparison"
import { CounselorFaq } from "@/components/counselor-faq"
import { CounselorCta } from "@/components/counselor-cta"
import { HomeFooter } from "@/components/home-footer"
import { HomeNavbar } from "@/components/home-navbar"

export const metadata: Metadata = {
  title: "Counselor Bot | ALMA AI",
  description: "Get emotional support, stress management techniques, and wellness resources with ALMA's Counselor Bot.",
}

export default function CounselorBotPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNavbar />
      <main className="flex-1">
        <CounselorHero />
        <CounselorFeatures />
        <CounselorDemo />
        <CounselorTestimonials />
        <CounselorUseCases />
        <CounselorComparison />
        <CounselorFaq />
        <CounselorCta />
      </main>
      <HomeFooter />
    </div>
  )
}
