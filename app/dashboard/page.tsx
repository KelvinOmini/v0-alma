import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/dashboard"

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <Dashboard />
    </div>
  )
}
