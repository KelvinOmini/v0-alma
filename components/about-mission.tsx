export function AboutMission() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Democratizing Access to Personalized Learning
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ALMA exists to make personalized, high-quality educational support accessible to everyone, regardless of
            background or resources. We believe that AI can transform education by providing tailored assistance that
            adapts to each person's unique learning style, pace, and goals.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                01
              </div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Personalized Learning</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                We're creating AI systems that adapt to each user's unique learning style, pace, and goals, providing
                truly personalized educational experiences.
              </p>
            </div>

            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                02
              </div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Equitable Access</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                We're committed to making high-quality educational support accessible to everyone, regardless of
                geographic location, socioeconomic status, or background.
              </p>
            </div>

            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                03
              </div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Holistic Support</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                We recognize that effective learning involves more than just academic content—it requires emotional
                support, career guidance, and practical skills development.
              </p>
            </div>

            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                04
              </div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Ethical AI</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                We're committed to developing AI systems that are transparent, fair, privacy-preserving, and designed to
                augment human capabilities rather than replace them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
