"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function ConceptExplainer() {
  const [showExplanation, setShowExplanation] = useState(false)
  const [activeTab, setActiveTab] = useState("simple")

  const handleExplain = () => {
    setShowExplanation(true)
  }

  return (
    <div className="space-y-6">
      {!showExplanation ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="concept">Enter a Concept or Topic</Label>
            <Input
              id="concept"
              placeholder="e.g., Mitosis, Photosynthesis, Krebs Cycle"
              defaultValue="Photosynthesis"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select defaultValue="biology">
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="level">Explanation Level</Label>
              <Select defaultValue="high-school">
                <SelectTrigger id="level">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elementary">Elementary</SelectItem>
                  <SelectItem value="middle-school">Middle School</SelectItem>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="college">College</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Include</Label>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="rounded-full bg-purple-50 text-purple-700">
                Visual Aids
              </Button>
              <Button variant="outline" className="rounded-full bg-purple-50 text-purple-700">
                Examples
              </Button>
              <Button variant="outline" className="rounded-full bg-purple-50 text-purple-700">
                Analogies
              </Button>
              <Button variant="outline" className="rounded-full">
                Practice Questions
              </Button>
              <Button variant="outline" className="rounded-full">
                Historical Context
              </Button>
            </div>
          </div>

          <Button onClick={handleExplain} className="w-full bg-purple-600 hover:bg-purple-700">
            Explain Concept
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Photosynthesis</h3>

              <Tabs defaultValue="simple" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="simple">Simple</TabsTrigger>
                  <TabsTrigger value="detailed">Detailed</TabsTrigger>
                  <TabsTrigger value="visual">Visual</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="simple" className="mt-4 space-y-4">
                  <p>
                    Photosynthesis is the process plants use to make their own food using sunlight. It's like a plant's
                    way of cooking a meal using sunlight as the energy source.
                  </p>

                  <div className="rounded-lg bg-purple-50 p-4">
                    <p className="font-medium text-purple-700">The Simple Formula:</p>
                    <p className="mt-2 text-center font-medium">
                      Carbon Dioxide + Water + Sunlight → Glucose (Sugar) + Oxygen
                    </p>
                  </div>

                  <p>
                    Plants take in carbon dioxide from the air through tiny pores called stomata. They absorb water
                    through their roots. When sunlight hits the plant's leaves, it triggers a chemical reaction that
                    converts these ingredients into glucose (which the plant uses for energy) and oxygen (which is
                    released into the air).
                  </p>

                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="font-medium text-green-700">Key Analogy:</p>
                    <p className="mt-1">
                      Think of a plant leaf as a solar-powered kitchen. Sunlight is the power source, carbon dioxide and
                      water are the ingredients, chlorophyll (the green pigment) is the chef, and glucose is the
                      finished meal that provides energy for the plant.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="detailed" className="mt-4 space-y-4">
                  <p>
                    Photosynthesis is a complex biochemical process that converts light energy into chemical energy,
                    which is then stored in the bonds of glucose molecules. It occurs in the chloroplasts of plant
                    cells, particularly in the leaves.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-700">The Two Main Stages:</h4>

                      <div className="mt-2 space-y-3">
                        <div className="rounded-lg bg-purple-50 p-3">
                          <p className="font-medium">1. Light-Dependent Reactions</p>
                          <ul className="mt-1 list-disc pl-5 text-sm">
                            <li>Occur in the thylakoid membranes of chloroplasts</li>
                            <li>Capture light energy and convert it to chemical energy (ATP and NADPH)</li>
                            <li>Split water molecules (photolysis), releasing oxygen as a byproduct</li>
                            <li>Involve photosystems I and II, electron transport chains, and ATP synthase</li>
                          </ul>
                        </div>

                        <div className="rounded-lg bg-purple-50 p-3">
                          <p className="font-medium">2. Calvin Cycle (Light-Independent Reactions)</p>
                          <ul className="mt-1 list-disc pl-5 text-sm">
                            <li>Occurs in the stroma of chloroplasts</li>
                            <li>Uses ATP and NADPH from light-dependent reactions to fix carbon dioxide</li>
                            <li>Produces glyceraldehyde-3-phosphate (G3P), which is used to make glucose</li>
                            <li>Involves the enzyme RuBisCO, which is the most abundant protein on Earth</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-purple-700">The Complete Equation:</h4>
                      <p className="mt-2 text-center font-medium">6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-purple-700">Factors Affecting Photosynthesis:</h4>
                      <ul className="mt-1 list-disc pl-5 text-sm">
                        <li>
                          <span className="font-medium">Light intensity:</span> Higher intensity increases the rate up
                          to a point
                        </li>
                        <li>
                          <span className="font-medium">Carbon dioxide concentration:</span> Higher levels increase the
                          rate
                        </li>
                        <li>
                          <span className="font-medium">Temperature:</span> Optimal range is typically 25-30°C
                        </li>
                        <li>
                          <span className="font-medium">Water availability:</span> Drought stress reduces photosynthetic
                          rate
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="visual" className="mt-4 space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="text-center">
                      <p className="font-medium">Photosynthesis Overview</p>
                      <div className="mt-4 flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-yellow-300 flex items-center justify-center mb-2">
                          <span className="text-yellow-800">Sunlight</span>
                        </div>
                        <div className="h-8 w-1 bg-gray-300"></div>
                        <div className="relative h-40 w-64 rounded-lg bg-green-100 flex items-center justify-center my-2 border border-green-300">
                          <div className="absolute top-0 left-4 -mt-3 rounded bg-white px-2 text-xs text-gray-500">
                            Leaf
                          </div>
                          <div className="h-24 w-48 rounded-lg bg-green-200 flex flex-col items-center justify-center border border-green-400">
                            <div className="absolute top-0 left-4 -mt-3 rounded bg-white px-2 text-xs text-gray-500">
                              Chloroplast
                            </div>
                            <div className="space-y-2 p-2">
                              <div className="flex justify-between text-xs">
                                <span>H₂O</span>
                                <span>CO₂</span>
                              </div>
                              <div className="h-1 w-full bg-green-400"></div>
                              <div className="text-center text-xs">
                                <span>Chlorophyll</span>
                              </div>
                              <div className="h-1 w-full bg-green-400"></div>
                              <div className="flex justify-between text-xs">
                                <span>O₂</span>
                                <span>Glucose</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-64 justify-between">
                          <div className="flex flex-col items-center">
                            <div className="h-8 w-1 bg-gray-300"></div>
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-xs text-center">
                              <span>Water from roots</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-8 w-1 bg-gray-300"></div>
                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-center">
                              <span>CO₂ from air</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-gray-200 p-3">
                      <p className="mb-2 text-center text-sm font-medium">Light-Dependent Reactions</p>
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-yellow-300"></div>
                        <div className="h-4 w-1 bg-gray-300"></div>
                        <div className="h-12 w-full rounded-lg bg-green-200 flex items-center justify-center text-xs">
                          Thylakoid Membrane
                        </div>
                        <div className="mt-2 flex w-full justify-between text-xs">
                          <div>H₂O → O₂</div>
                          <div>ATP + NADPH</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-3">
                      <p className="mb-2 text-center text-sm font-medium">Calvin Cycle</p>
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-full rounded-lg bg-green-100 flex items-center justify-center text-xs">
                          Stroma
                        </div>
                        <div className="mt-2 flex w-full justify-between text-xs">
                          <div>CO₂ + ATP + NADPH</div>
                          <div>→ Glucose</div>
                        </div>
                        <div className="mt-2 h-8 w-8 rounded-full border border-dashed border-green-500 flex items-center justify-center text-xs">
                          Cycle
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-700">Real-World Examples:</h4>
                    <ul className="mt-2 space-y-3">
                      <li className="rounded-lg bg-purple-50 p-3">
                        <p className="font-medium">Crop Productivity</p>
                        <p className="mt-1 text-sm">
                          Farmers optimize conditions for photosynthesis by ensuring adequate water, proper spacing for
                          light exposure, and sometimes supplementing CO₂ in greenhouses. This maximizes crop yields by
                          enhancing the plants' ability to produce glucose.
                        </p>
                      </li>
                      <li className="rounded-lg bg-purple-50 p-3">
                        <p className="font-medium">Seasonal Changes</p>
                        <p className="mt-1 text-sm">
                          Deciduous trees shed their leaves in fall because reduced sunlight and colder temperatures
                          make photosynthesis less efficient. By dropping leaves, trees conserve energy during winter
                          when photosynthetic activity would be minimal.
                        </p>
                      </li>
                      <li className="rounded-lg bg-purple-50 p-3">
                        <p className="font-medium">Aquatic Ecosystems</p>
                        <p className="mt-1 text-sm">
                          Algae and aquatic plants photosynthesize underwater, producing much of Earth's oxygen. Water
                          clarity affects how deep light can penetrate, creating distinct zones of photosynthetic
                          activity in lakes and oceans.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-purple-700">Practical Applications:</h4>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg border border-purple-200 p-3">
                        <p className="font-medium">Biofuels</p>
                        <p className="mt-1 text-xs">
                          Scientists are developing algae and other photosynthetic organisms that can efficiently
                          convert sunlight into biofuels, providing a renewable energy source.
                        </p>
                      </div>
                      <div className="rounded-lg border border-purple-200 p-3">
                        <p className="font-medium">Carbon Sequestration</p>
                        <p className="mt-1 text-xs">
                          Forests and other plant ecosystems act as carbon sinks through photosynthesis, helping
                          mitigate climate change by removing CO₂ from the atmosphere.
                        </p>
                      </div>
                      <div className="rounded-lg border border-purple-200 p-3">
                        <p className="font-medium">Food Security</p>
                        <p className="mt-1 text-xs">
                          Research into enhancing photosynthetic efficiency in crops could increase food production to
                          meet the needs of a growing global population.
                        </p>
                      </div>
                      <div className="rounded-lg border border-purple-200 p-3">
                        <p className="font-medium">Artificial Photosynthesis</p>
                        <p className="mt-1 text-xs">
                          Scientists are developing synthetic systems that mimic photosynthesis to convert sunlight into
                          chemical energy for various applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setShowExplanation(false)}>
                  Back to Search
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Save Explanation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
