import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { AssignmentHero } from "@/components/assignment-hero"
import { AssignmentFeatures } from "@/components/assignment-features"
import { AssignmentDemo } from "@/components/assignment-demo"
import { AssignmentTestimonials } from "@/components/assignment-testimonials"
import { AssignmentUseCases } from "@/components/assignment-use-cases"
import { AssignmentComparison } from "@/components/assignment-comparison"
import { AssignmentFAQ } from "@/components/assignment-faq"
import { AssignmentCTA } from "@/components/assignment-cta"

export default function AssignmentHelperPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <AssignmentHero />
        <AssignmentFeatures />
        <AssignmentDemo />
        <AssignmentTestimonials />
        <AssignmentUseCases />
        <AssignmentComparison />
        <AssignmentFAQ />
        <AssignmentCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
