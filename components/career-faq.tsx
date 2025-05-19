"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How personalized is the career advice from the Career Advisor?",
    answer:
      "The Career Advisor provides highly personalized guidance based on your specific skills, experience, career goals, and industry. It analyzes your inputs, resume, and preferences to deliver tailored recommendations, feedback, and strategies that are relevant to your unique professional journey.",
  },
  {
    question: "Can the Career Advisor help with industry-specific resume optimization?",
    answer:
      "Yes, the Career Advisor is trained on best practices across various industries and can provide targeted resume optimization for specific sectors. It can help you highlight relevant skills, use industry-appropriate terminology, and format your resume to meet the expectations of recruiters and ATS systems in your target industry.",
  },
  {
    question: "How does the interview preparation feature work?",
    answer:
      "The interview preparation feature simulates real interview scenarios with industry-specific questions. You can practice answering questions, and the Career Advisor will provide feedback on your responses, suggest improvements, and help you refine your answers. It can also provide guidance on common interview formats, behavioral questions, and technical assessments relevant to your field.",
  },
  {
    question: "Can the Career Advisor help with career transitions to different industries?",
    answer:
      "Absolutely. The Career Advisor excels at helping with career transitions by identifying transferable skills, suggesting skill development opportunities, and providing strategies for positioning yourself effectively for roles in new industries. It can help you reframe your experience, identify potential gaps, and create a targeted plan for your transition.",
  },
  {
    question: "Does the Career Advisor provide salary negotiation guidance?",
    answer:
      "Yes, the Career Advisor offers comprehensive salary negotiation guidance, including market rate research, strategies for discussing compensation, techniques for highlighting your value, and scripts for handling different negotiation scenarios. It can help you prepare for compensation discussions and maximize your earning potential.",
  },
  {
    question: "How up-to-date is the Career Advisor on current job market trends?",
    answer:
      "The Career Advisor is regularly updated with current job market trends, in-demand skills, and hiring practices across various industries. While it may not have real-time data on specific job openings, it provides relevant and current guidance on broader market trends, skill demands, and effective job search strategies.",
  },
  {
    question: "Can I use the Career Advisor for ongoing professional development planning?",
    answer:
      "Yes, the Career Advisor is an excellent resource for ongoing professional development. It can help you identify skill gaps, suggest relevant learning resources, create development plans aligned with your career goals, and provide guidance on certifications or educational opportunities that could advance your career.",
  },
]

export function CareerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Common questions about ALMA's Career Advisor and how it can help with your professional development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold leading-7 text-gray-900">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDown
                    className={`h-6 w-6 transform text-gray-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
