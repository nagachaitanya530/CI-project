import { useState, useEffect } from 'react'

export function useQRCode(url: string) {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!url) {
      setQrCode(null)
      return
    }

    const generateQRCode = async () => {
      setLoading(true)
      try {
        // Using QR Server API to generate QR code
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`
        setQrCode(qrUrl)
      } catch (error) {
        console.error('Failed to generate QR code:', error)
        setQrCode(null)
      } finally {
        setLoading(false)
      }
    }

    generateQRCode()
  }, [url])

  return { qrCode, loading }
}
