"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export function QuizGenerator() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleGenerateQuiz = () => {
    setShowQuiz(true)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === "b") {
      setScore(score + 1)
    }
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const questions = [
    {
      question: "Which of the following is NOT a stage of cellular respiration?",
      options: {
        a: "Glycolysis",
        b: "Photolysis",
        c: "Krebs Cycle",
        d: "Electron Transport Chain",
      },
      correctAnswer: "b",
      explanation:
        "Photolysis is a process that occurs during photosynthesis, not cellular respiration. It involves the splitting of water molecules using light energy. The stages of cellular respiration are glycolysis, pyruvate oxidation, Krebs cycle (citric acid cycle), and the electron transport chain.",
    },
    {
      question: "What is the primary function of mitosis?",
      options: {
        a: "Production of gametes",
        b: "Growth and repair of tissues",
        c: "Genetic recombination",
        d: "Reduction of chromosome number",
      },
      correctAnswer: "b",
      explanation:
        "Mitosis is the process of cell division that results in two identical daughter cells, each with the same number of chromosomes as the parent cell. Its primary function is growth and repair of tissues. Production of gametes and reduction of chromosome number occur during meiosis, while genetic recombination primarily occurs during meiosis through crossing over.",
    },
    {
      question: "Where does the Calvin cycle take place in a plant cell?",
      options: {
        a: "Thylakoid membrane",
        b: "Stroma of the chloroplast",
        c: "Mitochondrial matrix",
        d: "Cell membrane",
      },
      correctAnswer: "b",
      explanation:
        "The Calvin cycle (light-independent reactions of photosynthesis) takes place in the stroma of the chloroplast. The light-dependent reactions occur in the thylakoid membrane. The mitochondrial matrix is where the Krebs cycle of cellular respiration occurs.",
    },
    {
      question: "Which of the following is a product of the light-dependent reactions of photosynthesis?",
      options: {
        a: "Glucose",
        b: "ATP and NADPH",
        c: "Carbon dioxide",
        d: "Pyruvate",
      },
      correctAnswer: "b",
      explanation:
        "The light-dependent reactions of photosynthesis produce ATP (energy) and NADPH (reducing power), which are then used in the Calvin cycle to produce glucose. Glucose is the end product of the entire photosynthesis process. Carbon dioxide is a reactant, not a product, and pyruvate is involved in cellular respiration.",
    },
    {
      question: "During which phase of mitosis do chromosomes line up along the equator of the cell?",
      options: {
        a: "Prophase",
        b: "Metaphase",
        c: "Anaphase",
        d: "Telophase",
      },
      correctAnswer: "b",
      explanation:
        "During metaphase, chromosomes align at the metaphase plate (the equator of the cell). In prophase, chromosomes condense and the nuclear envelope breaks down. In anaphase, sister chromatids separate and move to opposite poles. In telophase, nuclear envelopes reform around the separated chromosomes.",
    },
  ]

  return (
    <div className="space-y-6">
      {!showQuiz ? (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quiz-subject">Subject</Label>
              <Select defaultValue="biology">
                <SelectTrigger id="quiz-subject">
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
              <Label htmlFor="quiz-topic">Specific Topic</Label>
              <Select defaultValue="cellular">
                <SelectTrigger id="quiz-topic">
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cellular">Cellular Processes</SelectItem>
                  <SelectItem value="genetics">Genetics</SelectItem>
                  <SelectItem value="ecology">Ecology</SelectItem>
                  <SelectItem value="evolution">Evolution</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="quiz-difficulty">Difficulty Level</Label>
              <span className="text-sm text-gray-500">Intermediate</span>
            </div>
            <Slider id="quiz-difficulty" defaultValue={[50]} max={100} step={25} className="py-4" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Beginner</span>
              <span>Advanced</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quiz-questions">Number of Questions</Label>
              <Input id="quiz-questions" type="number" defaultValue="5" min="1" max="20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-type">Question Type</Label>
              <Select defaultValue="multiple">
                <SelectTrigger id="quiz-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple">Multiple Choice</SelectItem>
                  <SelectItem value="truefalse">True/False</SelectItem>
                  <SelectItem value="short">Short Answer</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleGenerateQuiz} className="w-full bg-purple-600 hover:bg-purple-700">
            Generate Quiz
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {!quizCompleted ? (
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-500">Question {currentQuestion + 1} of 5</span>
                  <span className="text-sm font-medium text-gray-500">Score: {score}/5</span>
                </div>

                <h3 className="mb-4 text-lg font-bold">{questions[currentQuestion].question}</h3>

                <RadioGroup value={selectedAnswer || ""} className="space-y-3">
                  {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={key}
                        id={`option-${key}`}
                        onClick={() => handleAnswerSelect(key)}
                        disabled={showExplanation}
                      />
                      <Label
                        htmlFor={`option-${key}`}
                        className={`flex-grow rounded-md p-2 ${
                          showExplanation && key === questions[currentQuestion].correctAnswer
                            ? "bg-green-50 text-green-700"
                            : showExplanation &&
                                key === selectedAnswer &&
                                key !== questions[currentQuestion].correctAnswer
                              ? "bg-red-50 text-red-700"
                              : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{value}</span>
                          {showExplanation && key === questions[currentQuestion].correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {showExplanation &&
                            key === selectedAnswer &&
                            key !== questions[currentQuestion].correctAnswer && (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showExplanation && (
                  <div className="mt-4 rounded-lg bg-purple-50 p-4">
                    <p className="font-medium text-purple-700">Explanation:</p>
                    <p className="mt-1 text-sm">{questions[currentQuestion].explanation}</p>
                  </div>
                )}

                <div className="mt-6 flex justify-end space-x-2">
                  {!showExplanation ? (
                    <Button
                      onClick={handleCheckAnswer}
                      disabled={!selectedAnswer}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion} className="bg-purple-600 hover:bg-purple-700">
                      {currentQuestion < 4 ? "Next Question" : "Finish Quiz"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-bold">Quiz Completed!</h3>
                <p className="mb-6 text-gray-500">You scored {score} out of 5 questions correctly.</p>

                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-8 border-purple-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{Math.round((score / 5) * 100)}%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button onClick={handleGenerateQuiz} className="w-full bg-purple-600 hover:bg-purple-700">
                    Take Another Quiz
                  </Button>
                  <Button variant="outline" className="w-full">
                    Review Answers
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
