import Image from "next/image"
import { cn } from "@/lib/utils"

interface CustomLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function CustomLogo({ className, size = "md" }: CustomLogoProps) {
  // Size mappings
  const sizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.png" // This will be your uploaded logo
        alt="ALMA Logo"
        width={width}
        height={height}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
}
