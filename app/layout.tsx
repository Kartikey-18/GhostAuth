import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "GhostAuth - Zero-Knowledge Proof Authentication",
  description: "Prove you know the password without ever revealing it. Interactive ZKP authentication demo using Groth16 and snarkjs.",
  keywords: ["ZKP", "Zero-Knowledge Proofs", "Authentication", "Privacy", "Cryptography", "snarkjs", "Groth16"],
  authors: [{ name: "Kartikey Sankhdher" }],
  openGraph: {
    title: "GhostAuth - Zero-Knowledge Proof Authentication",
    description: "Prove you know without revealing. Interactive ZKP authentication demo.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={jetbrainsMono.className}>
        {/* Scanlines overlay for retro terminal effect */}
        <div className="scanlines" />
        {children}
      </body>
    </html>
  )
}
