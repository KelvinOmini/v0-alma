import { LogoUpload } from "@/components/logo-upload"

export default function SettingsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <LogoUpload />
      </div>
    </div>
  )
}
