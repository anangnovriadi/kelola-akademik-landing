import { GraduationCap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 px-4 transition-all duration-300">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <GraduationCap className="h-6 w-6 text-slate-300" />
            <span className="text-xl font-display font-semibold text-white">Kelola Akademik</span>
          </div>
          <p className="text-slate-300 font-normal text-sm">&copy; 2025 Kelola Akademik, All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
