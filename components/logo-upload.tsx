"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, Check, X } from "lucide-react"
import Image from "next/image"

export function LogoUpload() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload an image file")
      return
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setUploadError("File size should be less than 2MB")
      return
    }

    setUploadError(null)
    setIsUploading(true)

    // Create a preview
    const reader = new FileReader()
    reader.onload = () => {
      setLogoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false)
      }, 3000)
    }, 1500)

    // In a real application, you would upload the file to your server or storage service
    // const formData = new FormData()
    // formData.append("logo", file)
    // fetch("/api/upload-logo", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setIsUploading(false)
    //     setUploadSuccess(true)
    //   })
    //   .catch((error) => {
    //     setIsUploading(false)
    //     setUploadError("Failed to upload logo")
    //   })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Upload Logo</h2>
        <p className="text-sm text-gray-500">
          Upload your custom logo to replace the default ALMA logo. Recommended size: 512x512px.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-md border bg-gray-50">
          {logoPreview ? (
            <Image
              src={logoPreview || "/placeholder.svg"}
              alt="Logo preview"
              width={96}
              height={96}
              className="max-h-full max-w-full"
            />
          ) : (
            <div className="text-center text-sm text-gray-400">No logo</div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="logo-upload">Logo Image</Label>
            <div className="flex gap-2">
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Choose File"}
              </Button>
              <Button
                type="button"
                disabled={!logoPreview || isUploading}
                onClick={() => {
                  setLogoPreview(null)
                  if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                  }
                }}
                variant="outline"
              >
                Clear
              </Button>
            </div>
            <p className="text-xs text-gray-500">Supported formats: PNG, JPG, SVG. Max size: 2MB.</p>
          </div>

          {uploadError && (
            <div className="flex items-center gap-2 text-sm text-red-500">
              <X className="h-4 w-4" />
              {uploadError}
            </div>
          )}

          {uploadSuccess && (
            <div className="flex items-center gap-2 text-sm text-green-500">
              <Check className="h-4 w-4" />
              Logo uploaded successfully!
            </div>
          )}
        </div>
      </div>

      <div className="rounded-md bg-blue-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Upload className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Implementation Note</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                In a production environment, the logo would be uploaded to a storage service and the URL would be saved
                to your database. The CustomLogo component would then use this URL to display your logo throughout the
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
