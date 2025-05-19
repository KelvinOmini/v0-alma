import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Search, BookOpen, Edit, CheckSquare } from "lucide-react"
import { AssignmentOutputControls } from "@/components/assignment-output-controls"

export function AssignmentDemo() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Interactive Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Assignment Helper in Action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore how Assignment Helper can assist you at each stage of the writing process.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <Tabs defaultValue="planning" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
              <TabsTrigger value="planning" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Planning</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="drafting" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                <span className="hidden md:inline">Drafting</span>
              </TabsTrigger>
              <TabsTrigger value="editing" className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4" />
                <span className="hidden md:inline">Editing</span>
              </TabsTrigger>
              <TabsTrigger value="citation" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden md:inline">Citation</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="planning" className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Essay Structure Planning</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-sm text-gray-800">
                          I need help planning an essay about the environmental impacts of fast fashion.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow">
                        <p className="text-sm text-gray-800">
                          I'd be happy to help you plan your essay on the environmental impacts of fast fashion. Let's
                          start with an outline structure:
                        </p>
                        <div className="mt-3 rounded-md bg-blue-50 p-3">
                          <p className="text-sm font-medium text-blue-800">Suggested Essay Structure:</p>
                          <ul className="mt-2 space-y-1 text-sm text-blue-700">
                            <li>
                              <strong>Introduction:</strong> Define fast fashion and introduce its environmental
                              concerns
                            </li>
                            <li>
                              <strong>Body Section 1:</strong> Water pollution and chemical waste from textile
                              production
                            </li>
                            <li>
                              <strong>Body Section 2:</strong> Carbon emissions and energy consumption
                            </li>
                            <li>
                              <strong>Body Section 3:</strong> Textile waste and landfill issues
                            </li>
                            <li>
                              <strong>Body Section 4:</strong> Potential solutions and sustainable alternatives
                            </li>
                            <li>
                              <strong>Conclusion:</strong> Summarize impacts and emphasize importance of sustainable
                              practices
                            </li>
                          </ul>
                        </div>
                        <p className="mt-3 text-sm text-gray-800">
                          Would you like me to help you develop a thesis statement for this essay?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">Planning Features</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Structured essay outlines tailored to your topic</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Thesis statement development and refinement</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Topic exploration and narrowing assistance</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Logical argument structure recommendations</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">Try Planning Assistant</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Research Assistance</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-sm text-gray-800">
                          Can you help me find credible sources about water pollution caused by the fashion industry?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <Search className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow">
                        <p className="text-sm text-gray-800">
                          I'd be happy to help you find credible sources on water pollution caused by the fashion
                          industry. Here are some reliable academic and institutional sources:
                        </p>
                        <div className="mt-3 space-y-3">
                          <div className="rounded-md bg-blue-50 p-3">
                            <p className="text-sm font-medium text-blue-800">
                              Academic Journal: Environmental Science & Technology
                            </p>
                            <p className="mt-1 text-xs text-blue-700">
                              Quantifying the Environmental Impact of Textile Manufacturing: A Life Cycle Assessment
                              Study (2020)
                            </p>
                            <p className="mt-1 text-xs text-blue-600">
                              Key findings: Detailed analysis of water pollution from dyeing processes and chemical
                              treatments in textile production.
                            </p>
                          </div>
                          <div className="rounded-md bg-blue-50 p-3">
                            <p className="text-sm font-medium text-blue-800">
                              United Nations Environment Programme (UNEP)
                            </p>
                            <p className="mt-1 text-xs text-blue-700">
                              Report: "Putting the Brakes on Fast Fashion" (2022)
                            </p>
                            <p className="mt-1 text-xs text-blue-600">
                              Key findings: Comprehensive data on water usage, pollution levels, and chemical discharge
                              from global fashion supply chains.
                            </p>
                          </div>
                          <div className="rounded-md bg-blue-50 p-3">
                            <p className="text-sm font-medium text-blue-800">Nature Sustainability</p>
                            <p className="mt-1 text-xs text-blue-700">
                              "Microplastic Pollution from Synthetic Textiles: A Global Analysis" (2021)
                            </p>
                            <p className="mt-1 text-xs text-blue-600">
                              Key findings: Research on microfiber shedding during washing and its impact on aquatic
                              ecosystems.
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-800">
                          Would you like me to help you extract specific information from these sources for your essay?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">Research Features</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Find credible, relevant sources for your topic</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Extract key information and relevant quotes</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Evaluate source credibility and relevance</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Organize research findings by topic or section</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">Try Research Assistant</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="drafting" className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Content Development</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-sm text-gray-800">
                          I'm struggling to develop my paragraph about microplastic pollution from synthetic fabrics.
                          Can you help me expand on this point?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <Edit className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow">
                        <p className="text-sm text-gray-800">
                          I'd be happy to help you develop your paragraph on microplastic pollution from synthetic
                          fabrics. Here's a suggested expansion:
                        </p>
                        <div className="mt-3 rounded-md bg-blue-50 p-3">
                          <p className="text-sm text-blue-800">
                            Synthetic fabrics like polyester, nylon, and acrylic—which dominate fast fashion—are
                            significant contributors to microplastic pollution in aquatic ecosystems. When washed, these
                            petroleum-based textiles shed thousands of microscopic plastic fibers, measuring less than
                            5mm in length. A single load of laundry containing synthetic garments can release up to
                            700,000 microfibers (Browne et al., 2011). These particles are too small to be filtered by
                            standard wastewater treatment facilities and consequently flow into rivers, lakes, and
                            oceans. Once in aquatic environments, microplastics absorb toxic chemicals and are ingested
                            by marine organisms, introducing these pollutants into the food chain. Research by the
                            University of Plymouth found microplastics in 114 aquatic species, many of which end up on
                            our dinner plates (Thompson et al., 2019). The durability that makes synthetic fabrics
                            appealing to fast fashion manufacturers is precisely what makes them environmentally
                            problematic—these microplastics can persist in the environment for hundreds of years,
                            creating a lasting pollution legacy from today's disposable fashion choices.
                          </p>
                        </div>
                        <p className="mt-3 text-sm text-gray-800">This paragraph incorporates:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                          <li>Specific data points with citations</li>
                          <li>Clear cause-and-effect relationships</li>
                          <li>Relevant scientific research</li>
                          <li>Connection back to the fast fashion industry</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-800">
                          Would you like me to help you develop any other sections of your essay?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">Drafting Features</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Paragraph development with supporting evidence</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Transition suggestions between sections</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Introduction and conclusion crafting</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Argument strengthening with examples and data</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">Try Drafting Assistant</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="editing" className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Grammar & Style Checking</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-sm text-gray-800">
                          Can you check this paragraph for grammar and style issues? "Fast fashion has a big impact on
                          the environment. It uses alot of water and chemicals which pollutes rivers and stuff.
                          Companies make clothes really cheap and people buy them and throw them away quick which is bad
                          for landfills."
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <CheckSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow">
                        <p className="text-sm text-gray-800">
                          I'd be happy to help improve the grammar and style of your paragraph. Here's my analysis and
                          suggested revision:
                        </p>
                        <div className="mt-3 rounded-md bg-red-50 p-3">
                          <p className="text-sm font-medium text-red-800">
                            Original Paragraph (with issues highlighted):
                          </p>
                          <p className="mt-1 text-sm text-red-700">
                            "Fast fashion has a <span className="underline">big</span> impact on the environment. It
                            uses <span className="underline">alot</span> of water and chemicals which pollutes rivers
                            and <span className="underline">stuff</span>. Companies make clothes really{" "}
                            <span className="underline">cheap</span> and people buy them and throw them away{" "}
                            <span className="underline">quick</span> which is bad for landfills."
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-red-600">
                            <li>Informal language: "big," "stuff," "cheap," "quick"</li>
                            <li>Spelling error: "alot" should be "a lot"</li>
                            <li>Run-on sentence with "which" clauses</li>
                            <li>Lack of specific details and academic tone</li>
                            <li>Missing transition between sentences</li>
                          </ul>
                        </div>

                        <div className="mt-3 rounded-md bg-green-50 p-3">
                          <p className="text-sm font-medium text-green-800">Revised Paragraph:</p>
                          <p className="mt-1 text-sm text-green-700">
                            "Fast fashion has a significant impact on the environment. The industry consumes substantial
                            amounts of water and utilizes harmful chemicals that contaminate rivers and aquatic
                            ecosystems. Furthermore, manufacturers produce inexpensive garments designed for short-term
                            use, leading consumers to dispose of them rapidly, which contributes to growing landfill
                            waste and associated environmental degradation."
                          </p>
                        </div>

                        <p className="mt-3 text-sm text-gray-800">The revised version:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                          <li>Uses formal academic language</li>
                          <li>Corrects spelling and grammar errors</li>
                          <li>Improves sentence structure and flow</li>
                          <li>Adds specific details and precise terminology</li>
                          <li>Includes a transition word ("Furthermore")</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Export Options</h4>
                    <AssignmentOutputControls />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">Editing Features</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Grammar and spelling correction</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Academic tone and style enhancement</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Sentence structure improvement</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Clarity and conciseness suggestions</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">Try Editing Assistant</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="citation" className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Citation Formatting</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-sm text-gray-800">
                          I need to cite this journal article in APA format: Title: Quantifying the Environmental Impact
                          of Textile Manufacturing: A Life Cycle Assessment Study Authors: Sarah Johnson and Michael
                          Chen Journal: Environmental Science & Technology Year: 2020 Volume: 54 Issue: 12 Pages:
                          7824-7835 DOI: 10.1021/acs.est.0c01415
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg bg-white p-3 shadow">
                        <p className="text-sm text-gray-800">Here's the citation formatted in APA 7th edition style:</p>
                        <div className="mt-3 rounded-md bg-blue-50 p-3">
                          <p className="text-sm font-medium text-blue-800">APA 7th Edition Citation:</p>
                          <p className="mt-1 text-sm text-blue-700">
                            Johnson, S., & Chen, M. (2020). Quantifying the environmental impact of textile
                            manufacturing: A life cycle assessment study.{" "}
                            <em>Environmental Science & Technology, 54</em>(12), 7824-7835.
                            https://doi.org/10.1021/acs.est.0c01415
                          </p>
                        </div>

                        <p className="mt-3 text-sm text-gray-800">For in-text citation, you would use:</p>
                        <div className="mt-2 space-y-2">
                          <div className="rounded-md bg-blue-50 p-2">
                            <p className="text-sm text-blue-700">Parenthetical citation: (Johnson & Chen, 2020)</p>
                          </div>
                          <div className="rounded-md bg-blue-50 p-2">
                            <p className="text-sm text-blue-700">Narrative citation: Johnson and Chen (2020)</p>
                          </div>
                        </div>

                        <p className="mt-3 text-sm text-gray-800">
                          Would you like me to format this citation in a different style (MLA, Chicago, etc.)?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">Citation Features</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Multiple citation style formats (APA, MLA, Chicago, Harvard)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">In-text citation and reference list generation</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Citation formatting for various source types</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Bibliography organization and formatting</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">Try Citation Assistant</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
