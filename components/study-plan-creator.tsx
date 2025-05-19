"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export function StudyPlanCreator() {
  const [date, setDate] = useState<Date>()
  const [showPlan, setShowPlan] = useState(false)

  const handleCreatePlan = () => {
    setShowPlan(true)
  }

  return (
    <div className="space-y-6">
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
              <SelectItem value="literature">Literature</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="exam-date">Exam Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal" id="exam-date">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topics">Key Topics</Label>
        <Textarea
          id="topics"
          placeholder="Enter the main topics you need to study (e.g., cellular respiration, photosynthesis, cell division)"
          className="min-h-[100px]"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="difficulty">Current Knowledge Level</Label>
          <Select defaultValue="intermediate">
            <SelectTrigger id="difficulty">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="hours">Study Hours Available (per week)</Label>
          <Input id="hours" type="number" defaultValue="10" />
        </div>
      </div>

      <Button onClick={handleCreatePlan} className="w-full bg-purple-600 hover:bg-purple-700">
        Create Study Plan
      </Button>

      {showPlan && (
        <div className="mt-6 rounded-lg border p-4">
          <h3 className="mb-4 text-lg font-bold">Your Personalized Study Plan</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-purple-700">Week 1: Foundations</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Monday & Tuesday (2 hours each)</p>
                    <p className="text-gray-500">
                      Review basic concepts and terminology. Create flashcards for key terms.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Wednesday & Thursday (2 hours each)</p>
                    <p className="text-gray-500">Study cellular structures and functions. Draw and label diagrams.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Friday (1 hour)</p>
                    <p className="text-gray-500">Practice quiz on week's material. Review incorrect answers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Weekend (3 hours total)</p>
                    <p className="text-gray-500">
                      Comprehensive review of week's material. Begin cellular respiration basics.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-purple-700">Week 2: Core Processes</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Monday & Tuesday (2 hours each)</p>
                    <p className="text-gray-500">Deep dive into cellular respiration. Create process flow diagrams.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Wednesday & Thursday (2 hours each)</p>
                    <p className="text-gray-500">
                      Study photosynthesis in detail. Compare and contrast with respiration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Friday (1 hour)</p>
                    <p className="text-gray-500">Practice quiz on cellular processes. Focus on energy transfer.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Weekend (3 hours total)</p>
                    <p className="text-gray-500">Review and practice problems. Begin cell division concepts.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-purple-700">Week 3: Advanced Topics & Review</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Monday & Tuesday (2 hours each)</p>
                    <p className="text-gray-500">
                      Study cell division in detail. Create comparison charts for mitosis and meiosis.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Wednesday & Thursday (2 hours each)</p>
                    <p className="text-gray-500">
                      Comprehensive review of all topics. Focus on connections between concepts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Friday (2 hours)</p>
                    <p className="text-gray-500">Full practice exam. Time yourself to simulate test conditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600"></div>
                  <div>
                    <p className="font-medium">Weekend (2 hours)</p>
                    <p className="text-gray-500">Review practice exam results. Focus on any remaining weak areas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="outline" className="w-full">
              Download Study Plan
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
