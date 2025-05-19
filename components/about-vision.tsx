import Image from "next/image"

export function AboutVision() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Vision</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Future of Learning</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We envision a world where everyone has access to personalized, high-quality educational support that adapts
            to their unique needs and helps them achieve their full potential.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900/5 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Future+of+Learning"
                alt="Future of Learning"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-base leading-7 text-gray-600">
              <p>
                At ALMA, we're working toward a future where AI-powered learning assistance is as common and accessible
                as a search engine—but infinitely more personalized and effective. We believe that in the coming years,
                every learner will have access to AI tools that understand their unique learning style, adapt to their
                pace, and provide support tailored to their specific needs.
              </p>
              <p>
                Our roadmap includes expanding ALMA's capabilities to support more languages, subjects, and learning
                contexts. We're developing more sophisticated personalization algorithms that can adapt not just to what
                a user knows, but to how they learn best. And we're exploring ways to make ALMA accessible to
                underserved communities around the world.
              </p>
              <p>
                We also recognize that the future of education isn't just about technology—it's about human connection.
                That's why we're designing ALMA to complement and enhance human teaching, not replace it. We envision
                ALMA as a tool that frees educators to focus on what they do best: inspiring, mentoring, and connecting
                with students.
              </p>
              <p>
                Ultimately, our vision is a world where everyone can reach their full potential through personalized
                learning experiences that adapt to their unique needs, interests, and goals. We believe ALMA can play a
                crucial role in making that vision a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
