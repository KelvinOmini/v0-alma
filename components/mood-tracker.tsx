"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smile, Frown, Meh, ThumbsUp, Calendar } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type MoodEntry = {
  date: string
  value: number
  notes: string
}

const moodLabels = [
  { value: 1, label: "Very Low", icon: Frown, color: "text-red-500" },
  { value: 2, label: "Low", icon: Frown, color: "text-orange-500" },
  { value: 3, label: "Neutral", icon: Meh, color: "text-yellow-500" },
  { value: 4, label: "Good", icon: Smile, color: "text-green-500" },
  { value: 5, label: "Very Good", icon: ThumbsUp, color: "text-blue-500" },
]

// Sample data for the chart
const last30Days = Array.from({ length: 30 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (29 - i))
  return {
    date: date.toISOString().split("T")[0],
    value: Math.floor(Math.random() * 5) + 1,
    notes: "",
  }
})

export function MoodTracker() {
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>(last30Days)
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [moodNote, setMoodNote] = useState("")

  const handleMoodSelection = (value: number) => {
    setSelectedMood(value)
  }

  const handleSaveMood = () => {
    if (selectedMood) {
      const today = new Date().toISOString().split("T")[0]
      const newEntry: MoodEntry = {
        date: today,
        value: selectedMood,
        notes: moodNote,
      }

      // Check if there's already an entry for today
      const updatedHistory = [...moodHistory]
      const todayIndex = updatedHistory.findIndex((entry) => entry.date === today)

      if (todayIndex >= 0) {
        updatedHistory[todayIndex] = newEntry
      } else {
        updatedHistory.push(newEntry)
      }

      setMoodHistory(updatedHistory)
      setSelectedMood(null)
      setMoodNote("")
    }
  }

  const getAverageMood = () => {
    const last7Days = moodHistory.slice(-7)
    const sum = last7Days.reduce((acc, entry) => acc + entry.value, 0)
    return (sum / last7Days.length).toFixed(1)
  }

  const getMoodTrend = () => {
    const last14Days = moodHistory.slice(-14)
    const firstWeek = last14Days.slice(0, 7)
    const secondWeek = last14Days.slice(7)

    const firstWeekAvg = firstWeek.reduce((acc, entry) => acc + entry.value, 0) / firstWeek.length
    const secondWeekAvg = secondWeek.reduce((acc, entry) => acc + entry.value, 0) / secondWeek.length

    if (secondWeekAvg > firstWeekAvg + 0.5) return "improving"
    if (secondWeekAvg < firstWeekAvg - 0.5) return "declining"
    return "stable"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-pink-700">
          <Calendar className="mr-2 h-5 w-5" />
          Mood Tracker
        </CardTitle>
        <CardDescription>Track your emotional wellbeing over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="track">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="track">Log Today's Mood</TabsTrigger>
            <TabsTrigger value="history">Mood History</TabsTrigger>
          </TabsList>
          <TabsContent value="track" className="space-y-4 pt-4">
            <div className="text-center">
              <h3 className="mb-4 text-sm font-medium text-gray-500">How are you feeling today?</h3>
              <div className="flex justify-center space-x-4">
                {moodLabels.map((mood) => {
                  const Icon = mood.icon
                  return (
                    <button
                      key={mood.value}
                      onClick={() => handleMoodSelection(mood.value)}
                      className={`flex flex-col items-center rounded-lg p-3 transition-all ${
                        selectedMood === mood.value ? "bg-pink-100 ring-2 ring-pink-500" : "hover:bg-gray-100"
                      }`}
                    >
                      <Icon className={`h-8 w-8 ${mood.color}`} />
                      <span className="mt-1 text-xs">{mood.label}</span>
                    </button>
                  )
                })}
              </div>
              {selectedMood && (
                <div className="mt-6">
                  <textarea
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    placeholder="Add notes about your mood (optional)"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                    rows={3}
                  />
                  <Button onClick={handleSaveMood} className="mt-2 bg-pink-600 hover:bg-pink-700">
                    Save Mood
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="history" className="pt-4">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-pink-50 p-4 text-center">
                <p className="text-sm text-gray-600">7-Day Average</p>
                <p className="text-2xl font-bold text-pink-700">{getAverageMood()}</p>
              </div>
              <div className="rounded-lg bg-pink-50 p-4 text-center">
                <p className="text-sm text-gray-600">Trend</p>
                <p className="text-lg font-medium text-pink-700 capitalize">{getMoodTrend()}</p>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodHistory.slice(-30)} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={formatDate} interval={6} tick={{ fontSize: 12 }} />
                  <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} tick={{ fontSize: 12 }} />
                  <Tooltip
                    formatter={(value) => {
                      const mood = moodLabels.find((m) => m.value === value)
                      return [mood?.label || value, "Mood"]
                    }}
                    labelFormatter={formatDate}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ec4899"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        Tracking your mood can help identify patterns and improve emotional awareness.
      </CardFooter>
    </Card>
  )
}
