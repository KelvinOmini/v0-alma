import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CounselorFaq() {
  const faqs = [
    {
      question: "Is the Counselor Bot a replacement for professional therapy?",
      answer:
        "No, the Counselor Bot is designed to provide support and resources but is not a replacement for professional mental health services. It can help with stress management, emotional support, and wellness strategies, but we encourage seeking professional help for serious mental health concerns.",
    },
    {
      question: "How does the Counselor Bot protect my privacy?",
      answer:
        "Your conversations with the Counselor Bot are private and encrypted. We do not share your personal information with third parties. The system is designed with privacy as a priority, and you can delete your conversation history at any time.",
    },
    {
      question: "Can the Counselor Bot help with crisis situations?",
      answer:
        "The Counselor Bot can provide immediate resources and basic support during difficult moments, but it is not designed for emergency situations. In case of a mental health emergency, please contact a crisis hotline or emergency services immediately.",
    },
    {
      question: "What types of stress management techniques does the Counselor Bot offer?",
      answer:
        "The Counselor Bot offers a variety of evidence-based techniques including guided breathing exercises, progressive muscle relaxation, mindfulness practices, cognitive reframing strategies, and time management tools tailored to academic contexts.",
    },
    {
      question: "How personalized is the support from the Counselor Bot?",
      answer:
        "The Counselor Bot learns from your interactions to provide increasingly personalized support. It adapts its recommendations based on your preferences, feedback, and the specific challenges you're facing, creating a more tailored experience over time.",
    },
  ]

  return (
    <section className="bg-pink-50 py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Common questions about the Counselor Bot and how it can support your emotional wellbeing
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-pink-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
