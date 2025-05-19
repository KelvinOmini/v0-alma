"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { User, Bot } from "lucide-react"

export function ExamDemo() {
  const [activeTab, setActiveTab] = useState("study-plan")

  return (
    <section className="py-20 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Interactive Demo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See Exam Buddy in Action</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore how Exam Buddy helps at every stage of your exam preparation journey.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="study-plan" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
              <TabsTrigger value="explanations">Explanations</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
            </TabsList>
            <TabsContent value="study-plan" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 pb-4 border-b">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">User</p>
                        <div className="rounded-lg bg-gray-100 p-4">
                          <p>
                            I have a biology exam in 3 weeks covering cellular respiration, photosynthesis, and cell
                            division. Can you help me create a study plan?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">Exam Buddy</p>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="font-medium mb-2">3-Week Biology Exam Study Plan</p>
                          <div className="space-y-4">
                            <div>
                              <p className="font-medium text-purple-700">Week 1: Cellular Respiration</p>
                              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                                <li>Days 1-2: Glycolysis - key enzymes and energy yield</li>
                                <li>Days 3-4: Krebs Cycle - intermediate compounds and energy production</li>
                                <li>Days 5-7: Electron Transport Chain - ATP synthesis and oxygen's role</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-purple-700">Week 2: Photosynthesis</p>
                              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                                <li>Days 1-2: Light-dependent reactions - photosystems and electron flow</li>
                                <li>Days 3-4: Calvin Cycle - carbon fixation and glucose synthesis</li>
                                <li>Days 5-7: Comparing photosynthesis and cellular respiration</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-purple-700">Week 3: Cell Division & Review</p>
                              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                                <li>Days 1-2: Mitosis - phases and chromosome behavior</li>
                                <li>Days 3-4: Meiosis - crossing over and genetic variation</li>
                                <li>Days 5-7: Comprehensive review and practice tests</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-purple-100">
                            <p className="text-sm text-purple-700 font-medium">Study Techniques:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                              <li>Create flashcards for key terms and processes</li>
                              <li>Draw diagrams of each cycle and process</li>
                              <li>Practice explaining concepts out loud</li>
                              <li>Complete 2-3 practice questions after each study session</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="practice" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 pb-4 border-b">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">User</p>
                        <div className="rounded-lg bg-gray-100 p-4">
                          <p>Can you give me some practice questions about cellular respiration?</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">Exam Buddy</p>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="font-medium mb-4">Cellular Respiration Practice Questions</p>

                          <div className="space-y-6">
                            <div className="space-y-2">
                              <p className="font-medium">Question 1:</p>
                              <p>Which stage of cellular respiration produces the most ATP?</p>
                              <div className="grid grid-cols-1 gap-2 mt-2">
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">A. Glycolysis</div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">B. Krebs Cycle</div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">
                                  C. Electron Transport Chain
                                </div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">
                                  D. Fermentation
                                </div>
                              </div>
                              <div className="mt-2 pt-2 border-t border-purple-100">
                                <p className="text-sm font-medium text-purple-700">
                                  Answer: C. Electron Transport Chain
                                </p>
                                <p className="text-sm mt-1">
                                  The electron transport chain generates approximately 32-34 ATP molecules through
                                  oxidative phosphorylation, while glycolysis produces 2 ATP and the Krebs cycle
                                  produces 2 ATP per glucose molecule.
                                </p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <p className="font-medium">Question 2:</p>
                              <p>What is the final electron acceptor in aerobic respiration?</p>
                              <div className="grid grid-cols-1 gap-2 mt-2">
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">A. NAD+</div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">B. Oxygen</div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">C. Glucose</div>
                                <div className="rounded border border-purple-200 px-3 py-2 text-sm">D. Pyruvate</div>
                              </div>
                              <div className="mt-2 pt-2 border-t border-purple-100">
                                <p className="text-sm font-medium text-purple-700">Answer: B. Oxygen</p>
                                <p className="text-sm mt-1">
                                  Oxygen serves as the final electron acceptor in the electron transport chain,
                                  combining with electrons and hydrogen ions to form water (H₂O).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="explanations" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 pb-4 border-b">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">User</p>
                        <div className="rounded-lg bg-gray-100 p-4">
                          <p>
                            I'm confused about the difference between mitosis and meiosis. Can you explain it simply?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">Exam Buddy</p>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="font-medium mb-4">Mitosis vs. Meiosis: Simple Explanation</p>

                          <div className="space-y-4">
                            <div>
                              <p className="font-medium text-purple-700">Mitosis: Cell Division for Growth & Repair</p>
                              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                                <li>
                                  <span className="font-medium">Purpose:</span> Creates new body cells for growth and
                                  repair
                                </li>
                                <li>
                                  <span className="font-medium">Number of divisions:</span> 1
                                </li>
                                <li>
                                  <span className="font-medium">Number of daughter cells:</span> 2
                                </li>
                                <li>
                                  <span className="font-medium">Chromosome number:</span> Daughter cells have the same
                                  number as the parent cell (diploid → diploid)
                                </li>
                                <li>
                                  <span className="font-medium">Genetic variation:</span> Daughter cells are genetically
                                  identical to the parent cell
                                </li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-medium text-purple-700">Meiosis: Cell Division for Reproduction</p>
                              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                                <li>
                                  <span className="font-medium">Purpose:</span> Creates gametes (eggs/sperm) for sexual
                                  reproduction
                                </li>
                                <li>
                                  <span className="font-medium">Number of divisions:</span> 2
                                </li>
                                <li>
                                  <span className="font-medium">Number of daughter cells:</span> 4
                                </li>
                                <li>
                                  <span className="font-medium">Chromosome number:</span> Daughter cells have half the
                                  number of the parent cell (diploid → haploid)
                                </li>
                                <li>
                                  <span className="font-medium">Genetic variation:</span> Daughter cells are genetically
                                  different due to crossing over and random assortment
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <p className="font-medium text-purple-700">Key Analogy:</p>
                              <p className="text-sm mt-1">
                                Think of mitosis as photocopying a document (making exact copies), while meiosis is more
                                like shuffling and dealing half a deck of cards to create unique combinations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="review" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 pb-4 border-b">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">User</p>
                        <div className="rounded-lg bg-gray-100 p-4">
                          <p>My biology exam is tomorrow. Can you help me review the key concepts of photosynthesis?</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium">Exam Buddy</p>
                        <div className="rounded-lg bg-purple-50 p-4">
                          <p className="font-medium mb-4">Photosynthesis: Last-Minute Review</p>

                          <div className="space-y-4">
                            <div>
                              <p className="font-medium text-purple-700">Overall Equation:</p>
                              <div className="bg-white p-3 rounded-lg border border-purple-200 mt-2 text-center">
                                <p className="font-medium">6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂</p>
                              </div>
                            </div>

                            <div>
                              <p className="font-medium text-purple-700">Key Concepts to Remember:</p>
                              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
                                <li>
                                  <span className="font-medium">Light-Dependent Reactions:</span>
                                  <ul className="list-circle pl-5 space-y-1 mt-1">
                                    <li>Occur in thylakoid membranes</li>
                                    <li>Capture light energy in ATP and NADPH</li>
                                    <li>Split water molecules (photolysis), releasing O₂</li>
                                    <li>Involve Photosystem I and II</li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-medium">Calvin Cycle (Light-Independent):</span>
                                  <ul className="list-circle pl-5 space-y-1 mt-1">
                                    <li>Occurs in the stroma</li>
                                    <li>Uses ATP and NADPH from light-dependent reactions</li>
                                    <li>Fixes CO₂ into glucose using the enzyme RuBisCO</li>
                                    <li>Regenerates RuBP to continue the cycle</li>
                                  </ul>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-medium text-purple-700">Common Exam Questions:</p>
                              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                                <li>Compare and contrast the light-dependent and light-independent reactions</li>
                                <li>Explain the role of chlorophyll in photosynthesis</li>
                                <li>Describe how environmental factors affect the rate of photosynthesis</li>
                                <li>Explain the relationship between photosynthesis and cellular respiration</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded-lg border border-purple-200">
                              <p className="font-medium text-purple-700">Memory Tip:</p>
                              <p className="text-sm mt-1">
                                Remember "GALT" for the products of the light-dependent reactions: G = Glucose (starts
                                to form), A = ATP, L = Light energy is captured, T = Transport molecules (NADPH) are
                                created.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
