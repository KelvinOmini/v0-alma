export function AboutPartners() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collaborating for Impact</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We work with leading educational institutions, research organizations, and technology companies to advance
            our mission of democratizing access to personalized learning.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/placeholder.svg?height=48&width=158&text=University+Partner"
            alt="University Partner"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/placeholder.svg?height=48&width=158&text=Research+Institute"
            alt="Research Institute"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/placeholder.svg?height=48&width=158&text=Tech+Company"
            alt="Tech Company"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/placeholder.svg?height=48&width=158&text=Education+Nonprofit"
            alt="Education Nonprofit"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/placeholder.svg?height=48&width=158&text=Foundation"
            alt="Foundation"
            width={158}
            height={48}
          />
        </div>

        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-100 px-4 py-1.5 text-sm leading-6 text-gray-600">
            <span className="hidden md:inline">Want to partner with us? </span>
            <a href="#" className="font-semibold text-blue-600">
              <span className="absolute inset-0" aria-hidden="true" /> Contact our partnerships team{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
