"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, Search, TrendingUp } from "lucide-react"

const demoContent = [
  {
    id: "resume",
    title: "Resume Review",
    icon: FileText,
    conversation: [
      {
        user: "I need help improving my resume for software engineering positions. Can you review it?",
        assistant:
          "I'd be happy to help you improve your resume for software engineering roles. Could you share what sections you currently have and any specific areas you're concerned about?",
      },
      {
        user: "I have the standard sections: education, experience, skills. I'm worried my experience descriptions aren't technical enough.",
        assistant:
          "That's a common concern. For software engineering roles, it's important to highlight technical achievements and quantifiable results. Let me give you some tips for improving your experience descriptions:\n\n1. Use the STAR method (Situation, Task, Action, Result)\n2. Include specific technologies and programming languages\n3. Quantify your impact (e.g., improved performance by 30%)\n4. Highlight collaborative work and problem-solving\n\nWould you like me to help rewrite one of your experience descriptions as an example?",
      },
      {
        user: "Yes, please. Here's one: 'Developed features for the company's main web application.'",
        assistant:
          "Here's a stronger version that highlights technical details and impact:\n\n'Engineered and implemented key features for the company's core web application using React and Node.js, resulting in a 25% improvement in user engagement and reducing load times by 40%. Collaborated with a team of 5 developers to refactor legacy code, which decreased bug reports by 30% and improved maintainability.'",
      },
    ],
    highlights: [
      "Tailored feedback for specific industries",
      "ATS-optimization suggestions",
      "Keyword analysis for job matching",
      "Before/after comparisons",
    ],
  },
  {
    id: "interview",
    title: "Interview Prep",
    icon: MessageSquare,
    conversation: [
      {
        user: "I have an interview for a product manager role next week. Can you help me prepare?",
        assistant:
          "I'd be happy to help you prepare for your product manager interview. Let's start by covering some common question types you might encounter:\n\n1. Behavioral questions about your past experiences\n2. Product design and strategy questions\n3. Analytical and problem-solving scenarios\n4. Leadership and teamwork examples\n\nWould you like to practice with some specific questions, or shall we discuss preparation strategies first?",
      },
      {
        user: "Let's practice with some questions. What might they ask about product strategy?",
        assistant:
          "Great choice! Here's a common product strategy question:\n\n\"Imagine you're the product manager for a new feature on our platform. How would you determine if this feature is successful?\"\n\nTake your time to think about your answer, and when you're ready, let me know how you'd approach this.",
      },
      {
        user: "I would define key metrics like user adoption, engagement, and revenue impact. Then set up A/B testing to measure performance against these metrics.",
        assistant:
          "That's a solid foundation! Here's some feedback to strengthen your answer:\n\n✅ Good job mentioning key metrics and A/B testing\n\nTo make your answer even stronger:\n\n1. Start with understanding the feature's objectives and how they align with company goals\n2. Mention specific KPIs (e.g., DAU/MAU ratio, conversion rate)\n3. Discuss qualitative feedback methods (user interviews, surveys)\n4. Explain how you'd establish a baseline for comparison\n5. Mention a timeline for evaluation and potential iteration\n\nWould you like to try another question or refine this answer?",
      },
    ],
    highlights: [
      "Industry-specific practice questions",
      "Real-time feedback on responses",
      "Body language and communication tips",
      "Customized to job descriptions",
    ],
  },
  {
    id: "job-search",
    title: "Job Search",
    icon: Search,
    conversation: [
      {
        user: "I'm looking for marketing roles in the healthcare industry. How should I approach my search?",
        assistant:
          "Focusing on marketing roles in healthcare is a great strategy! Here's a structured approach to your job search:\n\n1. **Target Companies**: Research healthcare providers, pharmaceutical companies, medical device manufacturers, and healthcare tech companies with strong marketing departments\n\n2. **Specialized Job Boards**: Beyond general sites, check healthcare-specific boards like:\n   - Health eCareers\n   - Hospital Careers\n   - BioSpace\n   - MedReps\n\n3. **Keywords**: Use specific terms in your search like:\n   - Healthcare marketing\n   - Medical marketing\n   - Pharmaceutical marketing\n   - Patient acquisition\n   - Healthcare communications\n\nWould you like me to suggest some specific companies to target or help you optimize your LinkedIn profile for this search?",
      },
      {
        user: "Could you suggest some companies? And yes, LinkedIn optimization tips would be helpful.",
        assistant:
          'Here are some top companies to consider for healthcare marketing roles:\n\n**Healthcare Providers**:\n- Mayo Clinic\n- Cleveland Clinic\n- Kaiser Permanente\n\n**Pharmaceutical**:\n- Johnson & Johnson\n- Pfizer\n- Roche\n\n**Medical Devices**:\n- Medtronic\n- Boston Scientific\n- Stryker\n\n**Healthcare Tech**:\n- Epic Systems\n- Cerner\n- Teladoc Health\n\n**For LinkedIn optimization**:\n\n1. **Headline**: Use a keyword-rich headline like "Healthcare Marketing Professional | Patient Engagement | Digital Health Campaigns"\n\n2. **About Section**: Mention healthcare marketing expertise, relevant certifications (like HIPAA awareness), and specific healthcare campaigns\n\n3. **Experience**: Highlight any healthcare-related projects, even if from other industries\n\n4. **Skills**: Add healthcare-specific skills like "patient acquisition," "healthcare compliance," and "medical content marketing"\n\n5. **Connections**: Follow healthcare marketing groups and connect with professionals at target companies\n\nWould you like me to help you craft a specific section of your LinkedIn profile?',
      },
    ],
    highlights: [
      "Industry-specific job search strategies",
      "Customized company recommendations",
      "Keyword optimization for job boards",
      "Application tracking assistance",
    ],
  },
  {
    id: "career-path",
    title: "Career Planning",
    icon: TrendingUp,
    conversation: [
      {
        user: "I'm currently a junior data analyst. What should my 5-year career plan look like?",
        assistant:
          "Creating a 5-year career plan as a junior data analyst is a great way to guide your professional growth. Here's a strategic roadmap based on typical progression in the field:\n\n**Years 1-2: Building Core Expertise**\n- Master tools: Advanced SQL, Python/R, visualization tools (Tableau/Power BI)\n- Develop domain knowledge in your industry\n- Earn relevant certifications (e.g., Microsoft Data Analyst, Google Data Analytics)\n- Take on increasingly complex analysis projects\n\n**Years 2-3: Specialization & Growth**\n- Develop expertise in either:\n  - Advanced statistical analysis\n  - Machine learning fundamentals\n  - Business intelligence\n- Begin mentoring junior team members\n- Lead smaller projects independently\n- Consider a specialized certification or graduate certificate\n\n**Years 3-5: Leadership & Advanced Roles**\n- Position yourself for promotion to Senior Data Analyst or Data Scientist\n- Develop project management skills\n- Build cross-functional collaboration experience\n- Consider MBA or MS in Data Science for management track\n\nWhat specific area of data analysis interests you most? This would help me refine this plan further.",
      },
      {
        user: "I'm most interested in machine learning and AI applications. How should I adjust my plan?",
        assistant:
          "Perfect! With your interest in machine learning and AI, here's a refined 5-year plan:\n\n**Years 1-2: ML Foundations**\n- Strengthen Python skills with focus on NumPy, Pandas, scikit-learn\n- Complete structured ML courses (Andrew Ng's course, fast.ai, or similar)\n- Build a portfolio of 3-5 ML projects (start with classification and regression)\n- Join ML communities (Kaggle, GitHub) and participate in competitions\n\n**Years 2-3: Specialization & Application**\n- Develop expertise in a specific ML area (NLP, computer vision, time series)\n- Learn a deep learning framework (TensorFlow or PyTorch)\n- Transition toward a Machine Learning Analyst or Junior Data Scientist role\n- Contribute to open-source ML projects\n\n**Years 3-5: Advanced Expertise & Leadership**\n- Position for Data Scientist or ML Engineer role\n- Develop MLOps skills (model deployment, monitoring)\n- Build experience with cloud ML services (AWS SageMaker, Azure ML, Google AI)\n- Consider MS in Machine Learning or AI if academic credentials needed\n\n**Recommended Certifications:**\n- TensorFlow Developer Certificate\n- AWS Machine Learning Specialty\n- Microsoft Azure AI Engineer\n\nWould you like me to suggest specific projects for your portfolio or resources for learning these skills?",
      },
    ],
    highlights: [
      "Personalized career progression maps",
      "Industry trend analysis",
      "Skill development recommendations",
      "Education and certification guidance",
    ],
  },
]

export function CareerDemo() {
  const [activeTab, setActiveTab] = useState("resume")

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Interactive Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See the Career Advisor in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore how our Career Advisor helps with different aspects of your professional development journey.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="resume" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {demoContent.map((demo) => (
                <TabsTrigger key={demo.id} value={demo.id} className="flex items-center gap-2">
                  <demo.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{demo.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {demoContent.map((demo) => (
              <TabsContent key={demo.id} value={demo.id} className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                      <div className="col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                        <div className="space-y-4 rounded-lg border bg-gray-50 p-4">
                          {demo.conversation.map((message, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                                  <span className="text-sm font-medium">You</span>
                                </div>
                                <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm">{message.user}</div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                                  <span className="text-sm font-medium">AI</span>
                                </div>
                                <div className="rounded-lg bg-white px-4 py-2 text-sm whitespace-pre-line">
                                  {message.assistant}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                        <ul className="mt-4 space-y-3">
                          {demo.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-4 w-4"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
