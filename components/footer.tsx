import { GraduationCap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6 text-amber-300" />
            <span className="text-xl font-semibold">Kelola Akademik</span>
          </div>
          <p className="text-amber-300">&copy; 2025 Kelola Akademik, All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
