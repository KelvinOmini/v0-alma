import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CounselorComparison() {
  const features = [
    {
      name: "Evidence-based stress management techniques",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
    {
      name: "24/7 immediate availability",
      counselorBot: true,
      generalAI: true,
      humanCounselor: false,
    },
    {
      name: "Personalized coping strategies",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
    {
      name: "Guided mindfulness exercises",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
    {
      name: "Academic stress specialization",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
    {
      name: "Crisis resource integration",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
    {
      name: "No appointment needed",
      counselorBot: true,
      generalAI: true,
      humanCounselor: false,
    },
    {
      name: "Emotional intelligence",
      counselorBot: true,
      generalAI: false,
      humanCounselor: true,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">
            How Counselor Bot Compares
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            See how our specialized Counselor Bot compares to general AI assistants and traditional counseling
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-pink-50">
                <TableHead className="w-[40%]">Feature</TableHead>
                <TableHead className="text-center">ALMA Counselor Bot</TableHead>
                <TableHead className="text-center">General AI Assistant</TableHead>
                <TableHead className="text-center">Human Counselor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-pink-50/30"}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.counselorBot ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.generalAI ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.humanCounselor ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Note: While Counselor Bot provides valuable support, it is not a replacement for professional mental health
            services.
          </p>
        </div>
      </div>
    </section>
  )
}
