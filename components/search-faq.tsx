import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SearchFAQ() {
  const faqs = [
    {
      question: "How does the AI Search Companion differ from regular search engines?",
      answer:
        "Unlike traditional search engines that return a list of links, our AI Search Companion actively processes and synthesizes information from multiple sources, evaluates source credibility, generates proper citations, and presents organized, coherent results. It understands natural language queries more effectively and can identify connections between different pieces of information that might otherwise be missed.",
    },
    {
      question: "What sources does the AI Search Companion use?",
      answer:
        "The AI Search Companion searches across a wide range of sources including academic databases, reputable news outlets, government publications, and other reliable information sources. It prioritizes credible, peer-reviewed, and authoritative sources while filtering out low-quality or unreliable information. You can also customize source preferences to focus on specific types of sources for your research needs.",
    },
    {
      question: "How accurate is the information provided?",
      answer:
        "The AI Search Companion prioritizes accuracy by drawing from reliable sources and providing transparency about where information comes from. It includes source evaluation to help you assess credibility, and always provides citations so you can verify information directly. While highly accurate, we recommend reviewing the original sources for critical research, which is made easy through our direct citation links.",
    },
    {
      question: "Can I save and organize my research?",
      answer:
        "Yes, the AI Search Companion includes comprehensive research organization tools. You can save searches, create research collections, organize information by topic or project, export your findings in various formats, and even create visual knowledge maps to see connections between different pieces of information. Your research history is also automatically saved for easy reference.",
    },
    {
      question: "What citation styles are supported?",
      answer:
        "The AI Search Companion supports all major citation styles including APA, MLA, Chicago, Harvard, IEEE, AMA, and many others. You can easily switch between citation styles with a single click, and the system will automatically format all citations correctly according to the latest edition of each style guide.",
    },
    {
      question: "Is my research data private and secure?",
      answer:
        "Yes, we take privacy and security seriously. Your search queries and research data are encrypted and not shared with third parties. We do not use your research data to train our models without explicit consent, and you have full control over your data with options to export or delete it at any time. For academic or professional research requiring additional confidentiality, we offer enhanced privacy options.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about the AI Search Companion.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
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
