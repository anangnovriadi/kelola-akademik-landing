"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 border-amber-300/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-amber-700" />
          <span className="text-2xl font-bold text-amber-900">Kelola Akademik</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            className="text-amber-800 hover:text-amber-900 transition-all duration-300"
            onClick={() => scrollToSection("features")}
          >
            Fitur
          </button>
          <button
            className="text-amber-800 hover:text-amber-900 transition-all duration-300"
            onClick={() => scrollToSection("support")}
          >
            Dukung Kami
          </button>
          <Button
            asChild
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6"
          >
            <Link href="/dashboard">
              Masuk Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
