import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Assignment Helper avoid plagiarism?",
    answer:
      "Assignment Helper is designed to assist with your writing process, not to write papers for you. It helps with brainstorming, research, structure, and editing while ensuring your work remains original. The content development suggestions are meant to guide your own writing, not replace it. Additionally, Assignment Helper can check your work for potential plagiarism issues and help you properly cite sources.",
  },
  {
    question: "Can Assignment Helper help with specific citation styles?",
    answer:
      "Yes, Assignment Helper supports all major citation styles including APA, MLA, Chicago, Harvard, IEEE, and more. It can format both in-text citations and reference lists/bibliographies according to the specific requirements of each style. The citation assistant is regularly updated to reflect the latest editions and guidelines for each format.",
  },
  {
    question: "Is Assignment Helper suitable for graduate-level writing?",
    answer:
      "Absolutely. Assignment Helper is designed to support academic writing at all levels, including graduate and doctoral work. It can assist with complex research papers, literature reviews, dissertations, and theses. The AI adapts to the complexity and requirements of your specific academic level and field of study.",
  },
  {
    question: "How does Assignment Helper handle different subject areas?",
    answer:
      "Assignment Helper is trained on a wide range of academic disciplines and can provide assistance across humanities, social sciences, STEM fields, business, and more. It understands the specific conventions, terminology, and requirements of different subject areas and adapts its guidance accordingly.",
  },
  {
    question: "Can I upload my draft for feedback?",
    answer:
      "Yes, you can upload existing drafts to Assignment Helper for analysis and feedback. The system will review your document and provide suggestions for improving structure, clarity, argument strength, grammar, style, and citations. This feature is particularly helpful for revising and polishing your work.",
  },
  {
    question: "How does Assignment Helper compare to writing center tutors?",
    answer:
      "Assignment Helper provides 24/7 instant feedback and assistance, complementing the role of writing center tutors. While human tutors offer valuable personalized guidance and can understand nuanced contexts, Assignment Helper excels at immediate, detailed feedback on grammar, structure, citations, and content development. Many students use both resources—Assignment Helper for ongoing support and initial revisions, and writing center tutors for higher-level feedback on more developed drafts.",
  },
]

export function AssignmentFAQ() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about the Assignment Helper.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
