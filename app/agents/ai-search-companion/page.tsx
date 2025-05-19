import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { SearchHero } from "@/components/search-hero"
import { SearchFeatures } from "@/components/search-features"
import { SearchDemo } from "@/components/search-demo"
import { SearchTestimonials } from "@/components/search-testimonials"
import { SearchUseCases } from "@/components/search-use-cases"
import { SearchComparison } from "@/components/search-comparison"
import { SearchFAQ } from "@/components/search-faq"
import { SearchCTA } from "@/components/search-cta"

export default function AISearchCompanionPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <SearchHero />
        <SearchFeatures />
        <SearchDemo />
        <SearchTestimonials />
        <SearchUseCases />
        <SearchComparison />
        <SearchFAQ />
        <SearchCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
