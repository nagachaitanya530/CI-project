"use client"

// This file provides a client-side wrapper for QR code generation
import { useEffect, useState } from "react"

export function useQRCode(text: string) {
  const [qrCode, setQrCode] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!text) {
      setQrCode("")
      setLoading(false)
      return
    }

    async function generateQR() {
      try {
        setLoading(true)
        // Dynamic import of qrcode
        const QRCode = (await import('qrcode')).default
        const url = await QRCode.toDataURL(text, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        })
        setQrCode(url)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to generate QR code"))
        console.error("Error generating QR code:", err)
      } finally {
        setLoading(false)
      }
    }

    generateQR()
  }, [text])

  return { qrCode, loading, error }
}
