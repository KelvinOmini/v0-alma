"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Exam Buddy create personalized study plans?",
    answer:
      "Exam Buddy analyzes your exam date, subject matter, current knowledge level, and learning preferences to create a customized study schedule. The plan adapts based on your progress and performance on practice questions, focusing more time on areas where you need improvement.",
  },
  {
    question: "Can Exam Buddy help with any subject?",
    answer:
      "Yes! Exam Buddy is designed to assist with a wide range of subjects including sciences (biology, chemistry, physics), mathematics, humanities, social sciences, language arts, and standardized test preparation. The system draws on a comprehensive knowledge base to provide subject-specific support.",
  },
  {
    question: "How accurate are the practice questions?",
    answer:
      "Exam Buddy generates practice questions that closely mirror the format, difficulty level, and content coverage of your actual exams. The questions are designed based on standard curricula, textbook content, and exam patterns to ensure they're relevant and helpful for your specific test preparation.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Exam Buddy includes comprehensive progress tracking that shows your performance trends, knowledge growth, and areas of improvement over time. You can view detailed analytics on your study habits, quiz performance, and concept mastery to understand your learning journey.",
  },
  {
    question: "How does Exam Buddy help with difficult concepts?",
    answer:
      "When you encounter challenging concepts, Exam Buddy breaks them down using multiple explanation methods including simplified definitions, visual aids, real-world examples, analogies, and step-by-step breakdowns. If you're still struggling, it will approach the concept from different angles until you understand.",
  },
  {
    question: "Can I use Exam Buddy for group study?",
    answer:
      "While Exam Buddy is primarily designed for individual use, you can share study materials, practice questions, and concept explanations with study partners. The personalized study plans remain individual, but the content generated can be valuable for group discussions and collaborative learning.",
  },
]

export function ExamFaq() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to common questions about Exam Buddy.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
