import type React from "react"
import { DM_Sans, Syne } from "next/font/google"
import { CursorTrail } from "@/components/cursor-trail"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
})

export const metadata = {
  title: "Portfolio — Frontend Developer",
  description: "Statik portfolio: layihələr, təcrübə və əlaqə.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorTrail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
