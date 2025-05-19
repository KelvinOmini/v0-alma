import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutStory } from "@/components/about-story"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"
import { AboutTechnology } from "@/components/about-technology"
import { AboutPartners } from "@/components/about-partners"
import { AboutTimeline } from "@/components/about-timeline"
import { AboutVision } from "@/components/about-vision"
import { AboutCTA } from "@/components/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutTechnology />
        <AboutPartners />
        <AboutTimeline />
        <AboutVision />
        <AboutCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
