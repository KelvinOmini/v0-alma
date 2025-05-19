import Image from "next/image"

export function AboutStory() {
  return (
    <div id="our-story" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Classroom Challenge to Global Solution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA began with a simple observation: students learn differently, but educational resources often take a
            one-size-fits-all approach. Our founders set out to change that.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:col-span-5 lg:order-last">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900/5 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=ALMA+Founders"
                alt="ALMA Founders"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-base leading-7 text-gray-600">
              <p>
                ALMA was founded in 2022 by Dr. Sarah Chen and Michael Rodriguez, who met while working on AI research
                at Stanford University. As a former educator, Dr. Chen had witnessed firsthand the challenges of
                providing personalized support to every student in a classroom. Rodriguez, a technologist with a
                background in machine learning, saw the potential for AI to address this gap.
              </p>
              <p>
                The initial prototype of ALMA was developed to help undergraduate students with research papers and exam
                preparation. The results were remarkable—students using the system showed significant improvements in
                both performance and confidence. What began as a small pilot program quickly expanded as word spread
                about the platform's effectiveness.
              </p>
              <p>
                In 2023, ALMA secured its first round of funding, allowing the team to expand beyond academic support to
                include career guidance, emotional well-being, and research assistance. The team grew from 5 to 25
                people, bringing together experts in education, psychology, AI ethics, and software development.
              </p>
              <p>
                Today, ALMA serves over 50,000 users across 30 countries, from high school students to working
                professionals and lifelong learners. What hasn't changed is our core mission: to provide personalized,
                accessible support that helps people achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
