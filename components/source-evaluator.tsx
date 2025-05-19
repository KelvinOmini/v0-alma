"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { FileCheck, AlertTriangle, Info, CheckCircle, XCircle, FileText } from "lucide-react"

export function SourceEvaluator() {
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault()
    if ((!url && !text) || isEvaluating) return

    setIsEvaluating(true)
    // Simulate evaluation delay
    setTimeout(() => {
      setIsEvaluating(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Source Evaluator</CardTitle>
          <CardDescription>Evaluate the credibility and reliability of information sources</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="url">
            <TabsList className="mb-4">
              <TabsTrigger value="url">Evaluate URL</TabsTrigger>
              <TabsTrigger value="text">Evaluate Text</TabsTrigger>
              <TabsTrigger value="file">Upload File</TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="mt-0">
              <form onSubmit={handleEvaluate} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="url"
                    placeholder="Enter URL to evaluate (e.g., https://example.com/article)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Enter the full URL of the webpage, article, or document you want to evaluate.
                  </p>
                </div>
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600" disabled={!url || isEvaluating}>
                  {isEvaluating ? "Evaluating..." : "Evaluate Source"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="text" className="mt-0">
              <form onSubmit={handleEvaluate} className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Paste text content to evaluate..."
                    className="min-h-[200px]"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Paste the text content you want to evaluate for credibility and reliability.
                  </p>
                </div>
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600" disabled={!text || isEvaluating}>
                  {isEvaluating ? "Evaluating..." : "Evaluate Content"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="file" className="mt-0">
              <div className="space-y-4">
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12">
                  <div className="text-center">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-600 focus-within:ring-offset-2 hover:text-amber-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOCX, TXT, HTML up to 10MB</p>
                  </div>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600" disabled={true}>
                  Evaluate File
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {isEvaluating && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4 text-center">
              <FileCheck className="mx-auto h-12 w-12 animate-pulse text-amber-500" />
              <h3 className="text-lg font-semibold">Evaluating Source</h3>
              <p className="text-gray-500">Analyzing credibility, checking references, and evaluating content...</p>
              <Progress value={45} className="h-2 w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {showResults && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Source Evaluation Results</CardTitle>
            <CardDescription>{url ? url : "Pasted text content"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-100 p-2 text-amber-800">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Overall Credibility Score</div>
                    <div className="text-sm text-gray-600">Based on multiple evaluation factors</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-700">78/100</div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Evaluation Factors</h3>

                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium">Author Credentials</span>
                      </div>
                      <span className="font-semibold text-green-600">Strong</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Author has relevant expertise and credentials in the field. Published in peer-reviewed journals.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium">Publication Reputation</span>
                      </div>
                      <span className="font-semibold text-green-600">High</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Published by a reputable organization with editorial standards and fact-checking processes.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="font-medium">Citation Quality</span>
                      </div>
                      <span className="font-semibold text-amber-600">Moderate</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Some claims are well-cited, but others lack specific references or rely on outdated sources.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">Currency</span>
                      </div>
                      <span className="font-semibold text-blue-600">Recent</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Content was published within the last year and reflects current understanding of the topic.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="font-medium">Bias Assessment</span>
                      </div>
                      <span className="font-semibold text-red-600">Potential Bias</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Content shows signs of potential bias in presentation and selection of evidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-4">
                <h3 className="mb-2 font-semibold">Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>This source is generally reliable but should be complemented with additional sources.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Verify specific claims that lack proper citation with other authoritative sources.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>
                      Be aware of potential bias in the presentation of information and seek alternative viewpoints.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save Evaluation</Button>
            <Button variant="outline">Export Report</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
