import { HomeNavbar } from "@/components/home-navbar"
import { HomeFooter } from "@/components/home-footer"
import { TestimonialsHero } from "@/components/testimonials-hero"
import { TestimonialsStats } from "@/components/testimonials-stats"
import { TestimonialsFeatured } from "@/components/testimonials-featured"
import { TestimonialsGrid } from "@/components/testimonials-grid"
import { TestimonialsCategories } from "@/components/testimonials-categories"
import { TestimonialsVideo } from "@/components/testimonials-video"
import { TestimonialsCTA } from "@/components/testimonials-cta"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <main>
        <TestimonialsHero />
        <TestimonialsStats />
        <TestimonialsFeatured />
        <TestimonialsGrid />
        <TestimonialsCategories />
        <TestimonialsVideo />
        <TestimonialsCTA />
      </main>
      <HomeFooter />
    </div>
  )
}
