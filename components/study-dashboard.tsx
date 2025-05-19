"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { StudyPlanCreator } from "@/components/study-plan-creator"
import { QuizGenerator } from "@/components/quiz-generator"
import { ConceptExplainer } from "@/components/concept-explainer"
import { StudyStats } from "@/components/study-stats"
import { Calendar, Clock, BookOpen, CheckCircle, Award, Brain } from "lucide-react"

export function StudyDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-8 flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Exam Buddy Dashboard</h1>
        <p className="text-gray-500">Your personal AI study partner for exam success</p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="concepts">Concepts</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                <Clock className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5 hours</div>
                <p className="text-xs text-gray-500">+2.3 hours from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Topics Covered</CardTitle>
                <BookOpen className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-gray-500">+5 topics this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Practice Questions</CardTitle>
                <CheckCircle className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">187</div>
                <p className="text-xs text-gray-500">78% correct rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mastery Score</CardTitle>
                <Award className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-gray-500">+8% improvement</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Exams</CardTitle>
                <CardDescription>Your scheduled exams and preparation status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Biology Midterm</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>May 25, 2025</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Readiness</p>
                      <div className="flex items-center">
                        <Progress value={75} className="h-2 w-24" />
                        <span className="ml-2 text-sm">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Calculus Final</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>June 10, 2025</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Readiness</p>
                      <div className="flex items-center">
                        <Progress value={42} className="h-2 w-24" />
                        <span className="ml-2 text-sm">42%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">History Essay</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>May 30, 2025</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Readiness</p>
                      <div className="flex items-center">
                        <Progress value={60} className="h-2 w-24" />
                        <span className="ml-2 text-sm">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Add New Exam
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest study activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Brain className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Completed Photosynthesis Quiz</p>
                      <p className="text-xs text-gray-500">2 hours ago • 85% score</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-purple-100 p-1">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Reviewed Cell Division Concepts</p>
                      <p className="text-xs text-gray-500">Yesterday • 45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Calendar className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Updated Study Plan</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>Personalized suggestions to improve your preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-purple-50 p-4">
                    <h4 className="font-medium text-purple-700">Review Weak Areas</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Your quiz results show you need to review cellular respiration. Focus on the electron transport
                      chain.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Start Review
                    </Button>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4">
                    <h4 className="font-medium text-purple-700">Practice More Questions</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Increase your practice question count for calculus derivatives to build confidence.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Generate Practice Quiz
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Streak</CardTitle>
                <CardDescription>Your consistent study habits</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-purple-100 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">12</div>
                    <div className="text-xs text-gray-500">days</div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-medium">Current Streak</p>
                  <p className="text-sm text-gray-500">Keep it going! Study daily for best results.</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Today's Session</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="study-plan" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Study Plan</CardTitle>
              <CardDescription>Create and manage your personalized study schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyPlanCreator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Questions</CardTitle>
              <CardDescription>Generate custom quizzes to test your knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <QuizGenerator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concepts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Concept Explainer</CardTitle>
              <CardDescription>Get clear explanations for difficult topics</CardDescription>
            </CardHeader>
            <CardContent>
              <ConceptExplainer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Track your improvement over time</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyStats />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
