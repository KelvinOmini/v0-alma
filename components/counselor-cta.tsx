import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CounselorCta() {
  return (
    <section className="bg-pink-900 py-16 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to prioritize your mental wellbeing?
            </h2>
            <p className="text-pink-100">
              Start a conversation with the Counselor Bot today and discover personalized strategies for managing
              stress, anxiety, and emotional challenges.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-pink-900 hover:bg-pink-100">
                <Link href="/dashboard">Try Counselor Bot Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pink-100 text-white hover:bg-pink-800">
                <Link href="/agents">Explore Other Agents</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-pink-800 p-6 text-pink-100">
            <h3 className="mb-4 text-xl font-semibold text-white">What to expect:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Personalized stress management techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Guided mindfulness and relaxation exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Emotional support for academic and personal challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Resources for building resilience and coping skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>24/7 availability whenever you need support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
