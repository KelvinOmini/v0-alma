"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Clock, Brain, Heart, Moon, X } from "lucide-react"

type ExerciseCategory = "mindfulness" | "stress" | "mood" | "sleep"

type Exercise = {
  id: string
  title: string
  description: string
  duration: number // in minutes
  category: ExerciseCategory
  steps: string[]
}

const exercises: Exercise[] = [
  {
    id: "e1",
    title: "Box Breathing",
    description: "A simple breathing technique to reduce stress and improve focus.",
    duration: 5,
    category: "stress",
    steps: [
      "Find a comfortable seated position with your back straight.",
      "Breathe in through your nose for 4 counts, filling your lungs completely.",
      "Hold your breath for 4 counts.",
      "Exhale through your mouth for 4 counts, emptying your lungs completely.",
      "Hold your breath for 4 counts.",
      "Repeat this cycle for 5 minutes.",
    ],
  },
  {
    id: "e2",
    title: "Body Scan Meditation",
    description: "A guided practice to release tension throughout your body.",
    duration: 10,
    category: "mindfulness",
    steps: [
      "Lie down or sit in a comfortable position.",
      "Close your eyes and take a few deep breaths.",
      "Bring your attention to your feet, noticing any sensations.",
      "Slowly move your attention up through your body - legs, hips, abdomen, chest, arms, shoulders, neck, and head.",
      "Notice any areas of tension and imagine breathing into those areas.",
      "As you exhale, imagine the tension dissolving and releasing.",
      "Continue until you've scanned your entire body.",
    ],
  },
  {
    id: "e3",
    title: "Gratitude Journal",
    description: "Write down three things you're grateful for to improve mood.",
    duration: 5,
    category: "mood",
    steps: [
      "Find a quiet space where you won't be interrupted.",
      "Take a few deep breaths to center yourself.",
      "Think about your day and identify three things you're grateful for, big or small.",
      "For each item, write it down and reflect on why you're grateful for it.",
      "Notice how you feel as you acknowledge these positive aspects of your life.",
      "Try to be specific and focus on different things each day.",
    ],
  },
  {
    id: "e4",
    title: "Progressive Muscle Relaxation",
    description: "Tense and relax muscle groups to reduce physical stress.",
    duration: 15,
    category: "sleep",
    steps: [
      "Lie down in a comfortable position.",
      "Take a few deep breaths to begin relaxing.",
      "Starting with your feet, tense the muscles as tightly as you can for 5 seconds.",
      "Release the tension and notice how your muscles feel as they relax.",
      "Move up to your calves, thighs, abdomen, chest, arms, hands, shoulders, neck, and face.",
      "For each muscle group, tense for 5 seconds, then release and relax for 15 seconds.",
      "After completing all muscle groups, take a few moments to enjoy the sensation of relaxation.",
    ],
  },
]

const getCategoryIcon = (category: ExerciseCategory) => {
  switch (category) {
    case "mindfulness":
      return <Brain className="h-5 w-5 text-blue-500" />
    case "stress":
      return <Brain className="h-5 w-5 text-green-500" />
    case "mood":
      return <Heart className="h-5 w-5 text-purple-500" />
    case "sleep":
      return <Moon className="h-5 w-5 text-indigo-500" />
  }
}

const getCategoryColor = (category: ExerciseCategory) => {
  switch (category) {
    case "mindfulness":
      return "bg-blue-50 border-blue-100"
    case "stress":
      return "bg-green-50 border-green-100"
    case "mood":
      return "bg-purple-50 border-purple-100"
    case "sleep":
      return "bg-indigo-50 border-indigo-100"
  }
}

const getBadgeColor = (category: ExerciseCategory) => {
  switch (category) {
    case "mindfulness":
      return "bg-blue-100 text-blue-800"
    case "stress":
      return "bg-green-100 text-green-800"
    case "mood":
      return "bg-purple-100 text-purple-800"
    case "sleep":
      return "bg-indigo-100 text-indigo-800"
  }
}

export function WellnessExercises() {
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isExerciseActive, setIsExerciseActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)

  const startExercise = (exercise: Exercise) => {
    setActiveExercise(exercise)
    setCurrentStep(0)
    setIsExerciseActive(true)
    setTimeRemaining(exercise.duration * 60) // Convert minutes to seconds
  }

  const nextStep = () => {
    if (activeExercise && currentStep < activeExercise.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const endExercise = () => {
    setIsExerciseActive(false)
    setActiveExercise(null)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-pink-700">Wellness Exercises</CardTitle>
          <CardDescription>Practice these exercises to improve your mental wellbeing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {exercises.map((exercise) => (
              <div key={exercise.id} className={`rounded-lg border p-4 ${getCategoryColor(exercise.category)}`}>
                <div className="mb-2 flex items-center justify-between">
                  <Badge className={getBadgeColor(exercise.category)}>
                    <span className="flex items-center">
                      {getCategoryIcon(exercise.category)}
                      <span className="ml-1 capitalize">{exercise.category}</span>
                    </span>
                  </Badge>
                  <span className="flex items-center text-xs text-gray-500">
                    <Clock className="mr-1 h-3 w-3" />
                    {exercise.duration} min
                  </span>
                </div>
                <h3 className="font-medium">{exercise.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{exercise.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-3 bg-pink-600 hover:bg-pink-700" onClick={() => startExercise(exercise)}>
                      Start Exercise
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{activeExercise?.title}</DialogTitle>
                      <DialogDescription>
                        {isExerciseActive
                          ? `Step ${currentStep + 1} of ${activeExercise?.steps.length}`
                          : activeExercise?.description}
                      </DialogDescription>
                    </DialogHeader>
                    {activeExercise && isExerciseActive && (
                      <div className="space-y-4">
                        <div className="rounded-lg bg-pink-50 p-4">
                          <p>{activeExercise.steps[currentStep]}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>
                              {currentStep + 1} of {activeExercise.steps.length}
                            </span>
                          </div>
                          <Progress value={((currentStep + 1) / activeExercise.steps.length) * 100} className="h-2" />
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                            Previous
                          </Button>
                          {currentStep < activeExercise.steps.length - 1 ? (
                            <Button onClick={nextStep}>Next</Button>
                          ) : (
                            <Button onClick={endExercise} className="bg-green-600 hover:bg-green-700">
                              Complete
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                    <Button variant="outline" size="icon" className="absolute right-4 top-4" onClick={endExercise}>
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
