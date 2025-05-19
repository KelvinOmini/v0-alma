import { HomeNavbar } from "@/components/home-navbar"
import { HomeHero } from "@/components/home-hero"
import { HomeFeatures } from "@/components/home-features"
import { HomeAgents } from "@/components/home-agents"
import { HomeTestimonials } from "@/components/home-testimonials"
import { HomeCTA } from "@/components/home-cta"
import { HomeFooter } from "@/components/home-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <HomeHero />
      <HomeFeatures />
      <HomeAgents />
      <HomeTestimonials />
      <HomeCTA />
      <HomeFooter />
    </div>
  )
}
