"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StudyStats() {
  const [timeRange, setTimeRange] = useState("month")

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="subjects">By Subject</TabsTrigger>
            <TabsTrigger value="time">Study Time</TabsTrigger>
          </TabsList>
        </Tabs>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="semester">This Semester</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.5 hours</div>
            <p className="text-xs text-gray-500">+12% from previous period</p>
            <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
              <div className="h-full w-[60%] rounded-full bg-purple-600"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Practice Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">328</div>
            <p className="text-xs text-gray-500">78% correct rate</p>
            <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
              <div className="h-full w-[78%] rounded-full bg-green-500"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Concepts Mastered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">+8 from previous period</p>
            <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
              <div className="h-full w-[65%] rounded-full bg-blue-500"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <p className="text-xs text-gray-500">Best: 14 days</p>
            <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
              <div className="h-full w-[85%] rounded-full bg-amber-500"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Your mastery level by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Biology</span>
                  <span className="text-sm text-gray-500">72%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-[72%] rounded-full bg-purple-600"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Chemistry</span>
                  <span className="text-sm text-gray-500">65%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-[65%] rounded-full bg-purple-600"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Mathematics</span>
                  <span className="text-sm text-gray-500">81%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-[81%] rounded-full bg-purple-600"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">History</span>
                  <span className="text-sm text-gray-500">58%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-[58%] rounded-full bg-purple-600"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Physics</span>
                  <span className="text-sm text-gray-500">43%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full w-[43%] rounded-full bg-purple-600"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Study Pattern</CardTitle>
            <CardDescription>Your study hours by day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-end justify-between">
              <div className="flex flex-col items-center">
                <div className="h-[30%] w-8 rounded-t-md bg-purple-200"></div>
                <span className="mt-2 text-xs">Mon</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[45%] w-8 rounded-t-md bg-purple-300"></div>
                <span className="mt-2 text-xs">Tue</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[25%] w-8 rounded-t-md bg-purple-200"></div>
                <span className="mt-2 text-xs">Wed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[60%] w-8 rounded-t-md bg-purple-400"></div>
                <span className="mt-2 text-xs">Thu</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[40%] w-8 rounded-t-md bg-purple-300"></div>
                <span className="mt-2 text-xs">Fri</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[80%] w-8 rounded-t-md bg-purple-600"></div>
                <span className="mt-2 text-xs">Sat</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[70%] w-8 rounded-t-md bg-purple-500"></div>
                <span className="mt-2 text-xs">Sun</span>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">You study most effectively on weekends</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
          <CardDescription>Your improvement trajectory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <div className="flex h-full flex-col justify-between">
              <div className="grid grid-cols-[50px_1fr] gap-4">
                <div className="text-right text-xs text-gray-500">100%</div>
                <div className="border-b border-dashed border-gray-200"></div>
              </div>
              <div className="grid grid-cols-[50px_1fr] gap-4">
                <div className="text-right text-xs text-gray-500">75%</div>
                <div className="border-b border-dashed border-gray-200"></div>
              </div>
              <div className="grid grid-cols-[50px_1fr] gap-4">
                <div className="text-right text-xs text-gray-500">50%</div>
                <div className="border-b border-dashed border-gray-200"></div>
              </div>
              <div className="grid grid-cols-[50px_1fr] gap-4">
                <div className="text-right text-xs text-gray-500">25%</div>
                <div className="border-b border-dashed border-gray-200"></div>
              </div>
              <div className="grid grid-cols-[50px_1fr] gap-4">
                <div className="text-right text-xs text-gray-500">0%</div>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="relative mt-[-200px] h-[200px]">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M0,80 L10,75 L20,70 L30,65 L40,60 L50,50 L60,45 L70,40 L80,30 L90,25 L100,20"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                <div>Week 1</div>
                <div>Week 2</div>
                <div>Week 3</div>
                <div>Week 4</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
