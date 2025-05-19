import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { FeatureHero } from "@/components/feature-hero"
import { FeatureAgents } from "@/components/feature-agents"
import { FeatureMultimodal } from "@/components/feature-multimodal"
import { FeatureAnalysis } from "@/components/feature-analysis"
import { FeaturePersonalization } from "@/components/feature-personalization"
import { FeatureComparison } from "@/components/feature-comparison"
import { FeatureCTA } from "@/components/feature-cta"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <FeatureHero />
        <FeatureAgents />
        <FeatureMultimodal />
        <FeatureAnalysis />
        <FeaturePersonalization />
        <FeatureComparison />
        <FeatureCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
