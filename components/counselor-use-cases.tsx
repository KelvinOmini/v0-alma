import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CounselorUseCases() {
  const useCases = [
    {
      title: "Academic Stress Management",
      description: "Support for managing exam anxiety, assignment pressure, and academic workload",
      benefits: [
        "Personalized stress reduction techniques",
        "Time management strategies",
        "Guided relaxation exercises",
        "Test anxiety coping mechanisms",
      ],
      icon: "📚",
    },
    {
      title: "Emotional Support",
      description: "Compassionate listening and guidance for emotional challenges",
      benefits: [
        "Empathetic conversation",
        "Emotional regulation strategies",
        "Mood tracking and insights",
        "Positive psychology exercises",
      ],
      icon: "❤️",
    },
    {
      title: "Wellness Coaching",
      description: "Holistic approach to mental and physical wellbeing",
      benefits: [
        "Sleep improvement strategies",
        "Mindfulness and meditation guides",
        "Physical activity recommendations",
        "Healthy habit formation",
      ],
      icon: "🧘",
    },
    {
      title: "Crisis Support",
      description: "Immediate resources and guidance during difficult moments",
      benefits: [
        "Crisis resource connections",
        "Grounding techniques",
        "Safety planning assistance",
        "Professional help referrals",
      ],
      icon: "🆘",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">
            How Students Use Counselor Bot
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Discover the various ways Counselor Bot can support your emotional wellbeing and mental health
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-pink-100">
              <CardHeader className="pb-2">
                <div className="mb-2 text-3xl">{useCase.icon}</div>
                <CardTitle className="text-xl text-pink-800">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-pink-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
