import { CounselorChat } from "@/components/counselor-chat"
import { AppSidebar } from "@/components/app-sidebar"

export default function CounselorBotPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1">
        <CounselorChat />
      </div>
    </div>
  )
}
