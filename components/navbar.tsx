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
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 border-slate-200/50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-slate-600" />
          <span className="text-2xl font-display font-bold text-slate-700">Kelola Akademik</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            className="text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium cursor-pointer"
            onClick={() => scrollToSection("features")}
          >
            Fitur
          </button>
          <button
            className="text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium cursor-pointer"
            onClick={() => scrollToSection("support")}
          >
            Dukung Kami
          </button>
          <Button
            asChild
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 font-medium"
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
