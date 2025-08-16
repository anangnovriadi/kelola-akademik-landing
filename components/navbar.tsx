"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
    <header className="fixed top-0 left-0 right-0 border-b bg-white/95 backdrop-blur-md z-50 border-slate-200/50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-slate-600" />
          <span className="text-xl font-display font-bold text-slate-700">Kelola Akademik</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            className="text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium cursor-pointer text-sm"
            onClick={() => scrollToSection("features")}
          >
            Fitur
          </button>
          <button
            className="text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium cursor-pointer text-sm"
            onClick={() => scrollToSection("support")}
          >
            Dukung Kami
          </button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-4 font-medium text-sm"
          >
            <Link href="https://my.kaldemik.com">
              Masuk Dashboard
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <button
              className="block w-full text-center text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium py-2 text-sm"
              onClick={() => {
                scrollToSection("features")
                setIsMobileMenuOpen(false)
              }}
            >
              Fitur
            </button>
            <button
              className="block w-full text-center text-slate-600 hover:text-slate-700 transition-all duration-300 font-medium py-2 text-sm"
              onClick={() => {
                scrollToSection("support")
                setIsMobileMenuOpen(false)
              }}
            >
              Dukung Kami
            </button>
            <Button
              asChild
              size="sm"
              className="mt-2 mb-2.5 w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-4 font-medium text-sm"
            >
              <Link href="https://my.kaldemik.com">
                Masuk Dashboard
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
