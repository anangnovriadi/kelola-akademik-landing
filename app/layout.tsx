import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kelola Akademik - Sistem Manajemen Akademik Terdepan",
  description:
    "Platform manajemen akademik all-in-one yang membantu sekolah mengelola siswa, presensi, dan administrasi dengan lebih efektif dan terorganisir.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily}, system-ui, -apple-system, sans-serif;
            --font-sans: ${inter.variable};
            --font-display: ${poppins.variable};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
