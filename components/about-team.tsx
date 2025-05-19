import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, Github } from "lucide-react"

const executives = [
  {
    name: "Dr. Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former Stanford AI researcher and high school teacher with a passion for educational equity. PhD in Computer Science with a focus on AI applications in education.",
    avatar: "/placeholder.svg?height=400&width=400&text=SC",
    initials: "SC",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Machine learning expert with previous experience at Google AI and DeepMind. Led the development of ALMA's core AI architecture and specialized agent system.",
    avatar: "/placeholder.svg?height=400&width=400&text=MR",
    initials: "MR",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Learning Officer",
    bio: "Educational psychologist with 15 years of experience in curriculum development and learning science. Ensures ALMA's AI agents are grounded in effective pedagogical approaches.",
    avatar: "/placeholder.svg?height=400&width=400&text=AP",
    initials: "AP",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Chief Product Officer",
    bio: "Former product leader at Khan Academy and Coursera. Passionate about creating intuitive, accessible educational technology that meets users where they are.",
    avatar: "/placeholder.svg?height=400&width=400&text=DK",
    initials: "DK",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

const teamMembers = [
  {
    name: "Dr. Elena Gonzalez",
    role: "AI Ethics Lead",
    avatar: "/placeholder.svg?height=200&width=200&text=EG",
    initials: "EG",
  },
  {
    name: "James Wilson",
    role: "Head of Engineering",
    avatar: "/placeholder.svg?height=200&width=200&text=JW",
    initials: "JW",
  },
  {
    name: "Dr. Kwame Osei",
    role: "Research Director",
    avatar: "/placeholder.svg?height=200&width=200&text=KO",
    initials: "KO",
  },
  {
    name: "Sophia Lee",
    role: "UX Design Lead",
    avatar: "/placeholder.svg?height=200&width=200&text=SL",
    initials: "SL",
  },
  {
    name: "Marcus Johnson",
    role: "Data Science Lead",
    avatar: "/placeholder.svg?height=200&width=200&text=MJ",
    initials: "MJ",
  },
  {
    name: "Priya Singh",
    role: "Curriculum Specialist",
    avatar: "/placeholder.svg?height=200&width=200&text=PS",
    initials: "PS",
  },
  {
    name: "Thomas Chen",
    role: "Frontend Engineer",
    avatar: "/placeholder.svg?height=200&width=200&text=TC",
    initials: "TC",
  },
  {
    name: "Olivia Brown",
    role: "Customer Success Lead",
    avatar: "/placeholder.svg?height=200&width=200&text=OB",
    initials: "OB",
  },
]

export function AboutTeam() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the People Behind ALMA
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've assembled a diverse team of experts in AI, education, psychology, and product development, all united
            by a passion for transforming learning through technology.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {executives.map((person) => (
            <div key={person.name} className="flex flex-col items-start">
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-64">
                <img
                  src={person.avatar || "/placeholder.svg"}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-blue-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                {person.social.twitter && (
                  <li>
                    <a href={person.social.twitter} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-5 w-5" />
                    </a>
                  </li>
                )}
                {person.social.linkedin && (
                  <li>
                    <a href={person.social.linkedin} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                )}
                {person.social.github && (
                  <li>
                    <a href={person.social.github} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">GitHub</span>
                      <Github className="h-5 w-5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">Team Members</h3>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
                <h4 className="mt-4 text-base font-semibold leading-7 text-gray-900">{person.name}</h4>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">Join Our Team</h3>
          <p className="mt-4 text-base leading-7 text-gray-600">
            We're always looking for passionate, talented people to join our mission. Check out our open positions.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
