import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ExamComparison() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Comparison</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Exam Buddy?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how Exam Buddy compares to other study methods and tools.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">Exam Buddy</TableHead>
                <TableHead className="text-center">Generic AI Assistants</TableHead>
                <TableHead className="text-center">Traditional Study Methods</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Personalized Study Plans</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Subject-Specific Knowledge</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Unlimited Practice Questions</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Adaptive Learning</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Progress Tracking</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">24/7 Availability</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Visual Learning Tools</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
