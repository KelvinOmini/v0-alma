import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Briefcase, HeartPulse, Brain, Search } from "lucide-react"

const categoryTestimonials = {
  assignment: [
    {
      content:
        "The Assignment Helper guided me through my senior thesis with expert advice on research methodology and structure. I received the highest grade in my class and my professor specifically praised the organization and clarity.",
      author: {
        name: "Taylor Wilson",
        role: "Senior, English Literature",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TW",
      },
    },
    {
      content:
        "As an international student, academic writing in English was challenging. ALMA helped me understand proper citation formats and improve my grammar. My writing confidence has increased tremendously.",
      author: {
        name: "Wei Zhang",
        role: "Graduate Student, Engineering",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "WZ",
      },
    },
    {
      content:
        "I used to struggle with organizing my thoughts for essays. The Assignment Helper taught me how to create outlines and develop coherent arguments. This skill will help me throughout my academic career.",
      author: {
        name: "Jamal Washington",
        role: "Freshman, Political Science",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JW",
      },
    },
  ],
  career: [
    {
      content:
        "After being laid off, I was struggling to update my resume after 15 years at the same company. The Career Advisor helped me highlight my transferable skills and achievements. I had three interviews within a week of using my new resume.",
      author: {
        name: "Patricia Garcia",
        role: "Marketing Professional",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "PG",
      },
    },
    {
      content:
        "The mock interview practice with the Career Advisor was incredibly realistic. It helped me identify weaknesses in my responses and provided specific suggestions for improvement. I felt much more confident in my actual interviews.",
      author: {
        name: "Derek Johnson",
        role: "Recent Graduate",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DJ",
      },
    },
    {
      content:
        "I was unsure about which career path to pursue with my biology degree. The Career Advisor helped me explore options I hadn't considered and connected my skills to potential roles. I'm now in a biotech position I love.",
      author: {
        name: "Aisha Patel",
        role: "Biotech Researcher",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AP",
      },
    },
  ],
  counseling: [
    {
      content:
        "During finals week, I was experiencing severe anxiety. The Counselor Bot taught me breathing techniques and helped me create a balanced study schedule. I made it through finals with less stress than ever before.",
      author: {
        name: "Ryan Kim",
        role: "Junior, Computer Science",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RK",
      },
    },
    {
      content:
        "As a working parent in an online degree program, I was constantly overwhelmed. The Counselor Bot helped me establish boundaries and self-care routines that made a huge difference in my mental health.",
      author: {
        name: "Maria Gonzalez",
        role: "Online Student & Parent",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MG",
      },
    },
    {
      content:
        "The daily check-ins from the Counselor Bot helped me monitor my emotional well-being during a challenging semester. Having a supportive presence available 24/7 prevented small issues from becoming major problems.",
      author: {
        name: "Tyler Robinson",
        role: "Graduate Student",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TR",
      },
    },
  ],
  exam: [
    {
      content:
        "I was struggling with organic chemistry until I started using the Exam Buddy. The personalized practice questions and concept explanations helped me understand complex reactions. I improved from a C to an A- on my final exam.",
      author: {
        name: "Leila Johnson",
        role: "Pre-med Student",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LJ",
      },
    },
    {
      content:
        "The Exam Buddy created a study schedule that broke down complex material into manageable daily sessions. This approach helped me retain information better and reduced last-minute cramming for my CPA exam.",
      author: {
        name: "Carlos Rodriguez",
        role: "Accounting Professional",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "CR",
      },
    },
    {
      content:
        "As someone with ADHD, traditional study methods often don't work for me. The Exam Buddy adapted to my learning style with interactive quizzes and visual explanations that helped me focus and retain information.",
      author: {
        name: "Emma Thompson",
        role: "Psychology Student",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ET",
      },
    },
  ],
  search: [
    {
      content:
        "For my dissertation research, the AI Search Companion saved me countless hours by finding relevant academic papers and synthesizing key findings. The source credibility assessment was particularly valuable.",
      author: {
        name: "Dr. Samuel Park",
        role: "Postdoctoral Researcher",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SP",
      },
    },
    {
      content:
        "As a journalist on tight deadlines, the AI Search Companion helps me quickly find reliable information and fact-check details. It's become an essential tool for my investigative reporting.",
      author: {
        name: "Nadia Ahmed",
        role: "Investigative Journalist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "NA",
      },
    },
    {
      content:
        "The AI Search Companion helped me navigate complex medical research for a family member's condition. It explained technical terms and summarized treatment options in a way I could understand.",
      author: {
        name: "Robert Chen",
        role: "Family Caregiver",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RC",
      },
    },
  ],
}

const categories = [
  {
    id: "assignment",
    name: "Assignment Helper",
    icon: BookOpen,
    color: "#3B82F6",
  },
  {
    id: "career",
    name: "Career Advisor",
    icon: Briefcase,
    color: "#10B981",
  },
  {
    id: "counseling",
    name: "Counselor Bot",
    icon: HeartPulse,
    color: "#EC4899",
  },
  {
    id: "exam",
    name: "Exam Buddy",
    icon: Brain,
    color: "#8B5CF6",
  },
  {
    id: "search",
    name: "AI Search",
    icon: Search,
    color: "#F59E0B",
  },
]

export function TestimonialsCategories() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Agent-Specific Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories by Agent</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore testimonials specific to each of ALMA's specialized AI agents and see how they've helped users in
            different contexts.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <Tabs defaultValue="assignment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-white"
                  style={{ "--tab-accent": category.color } as React.CSSProperties}
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {categoryTestimonials[category.id as keyof typeof categoryTestimonials].map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md"
                      style={{ borderTop: `4px solid ${category.color}` }}
                    >
                      <div className="flex-1">
                        <p className="text-base leading-7 text-gray-600">"{testimonial.content}"</p>
                      </div>
                      <div className="mt-6 flex items-center gap-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={testimonial.author.avatar || "/placeholder.svg"}
                            alt={testimonial.author.name}
                          />
                          <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author.name}</h3>
                          <p className="text-xs leading-5 text-gray-500">{testimonial.author.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
