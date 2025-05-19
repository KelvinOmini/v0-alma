import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeCTA() {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your learning experience?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of students and professionals who are using ALMA to achieve their academic and career goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/dashboard">Get Started for Free</Link>
            </Button>
            <Button asChild variant="link" className="text-white hover:text-blue-100">
              <Link href="#">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
