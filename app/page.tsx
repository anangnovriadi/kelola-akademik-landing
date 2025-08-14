"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  ClipboardList,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Heart,
  Coffee,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LandingPage() {
  const features = [
    {
      icon: Users,
      title: "Manajemen Siswa",
      description:
        "Kelola data siswa dengan mudah dan terorganisir. Tambah, edit, dan pantau informasi siswa secara real-time.",
    },
    {
      icon: BarChart3,
      title: "Rekap Presensi",
      description: "Dapatkan laporan presensi lengkap dengan analisis dan statistik untuk evaluasi kehadiran siswa.",
    },
    {
      icon: ClipboardList,
      title: "Presensi Harian",
      description: "Catat kehadiran siswa setiap hari dengan sistem yang praktis dan akurat.",
    },
    {
      icon: CheckCircle,
      title: "Sistem Presensi",
      description: "Platform presensi terintegrasi yang memudahkan pencatatan dan monitoring kehadiran.",
    },
    {
      icon: Calendar,
      title: "Jadwal Libur",
      description: "Atur dan kelola jadwal libur akademik dengan kalender yang mudah dipahami.",
    },
    {
      icon: Settings,
      title: "Pengaturan",
      description: "Kustomisasi sistem sesuai kebutuhan sekolah dengan berbagai opsi konfigurasi.",
    },
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-yellow-300 to-amber-300 text-amber-900 border-none rounded-full px-4 py-2"
          >
            Sistem Manajemen Akademik Terdepan
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Kelola Akademik
            <span className="text-transparent bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text block">
              Lebih Mudah & Efisien
            </span>
          </h1>
          <p className="text-xl text-amber-800/90 mb-8 leading-relaxed">
            Platform manajemen akademik all-in-one yang membantu sekolah mengelola siswa, presensi, dan administrasi
            dengan lebih efektif dan terorganisir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
            >
              <Link href="/dashboard">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/70 backdrop-blur-sm border-amber-400 text-amber-800 hover:bg-amber-50/80 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
              onClick={() => scrollToSection("dashboard-preview")}
            >
              Lihat Tampilan Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard-preview" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-amber-400 text-amber-800 rounded-full px-4 py-2">
              Interface Dashboard
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Tampilan Dashboard Kelola Akademik</h2>
            <p className="text-xl text-amber-800/90 max-w-2xl mx-auto">
              Interface yang intuitif dan mudah digunakan untuk mengelola semua aspek akademik sekolah Anda
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Row 1 - Single Dashboard Overview */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-300/50 transition-all duration-500 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm ml-4">Dashboard - Overview</span>
                </div>
              </div>
              <div className="aspect-video w-full">
                <img
                  src="/academic-dashboard-warm.png"
                  alt="Dashboard Overview - Statistik siswa dan data kehadiran"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Row 2 - Two Dashboards Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Student Management Dashboard */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-300/50 transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm ml-4">Manajemen Siswa</span>
                  </div>
                </div>
                <div className="aspect-video w-full">
                  <img
                    src="/student-management-warm.png"
                    alt="Manajemen Siswa - Daftar siswa dan profil lengkap"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Attendance System Dashboard */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-300/50 transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm ml-4">Sistem Presensi</span>
                  </div>
                </div>
                <div className="aspect-video w-full">
                  <img
                    src="/attendance-system-warm.png"
                    alt="Sistem Presensi - Rekap kehadiran harian dan bulanan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8"
            >
              <Link href="/dashboard">
                Akses Dashboard Lengkap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-amber-400 text-amber-800 rounded-full px-4 py-2">
              Fitur Unggulan
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Semua yang Anda Butuhkan dalam Satu Platform</h2>
            <p className="text-xl text-amber-800/90 max-w-2xl mx-auto">
              Fitur lengkap untuk mengelola seluruh aspek administrasi akademik sekolah Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-amber-300/50 bg-white/80 backdrop-blur-md rounded-2xl group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-orange-300 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:from-amber-400 group-hover:to-orange-400">
                    <feature.icon className="h-6 w-6 text-amber-800" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-amber-800/90">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Developer Section */}
      <section id="support" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-amber-400 text-amber-800 rounded-full px-4 py-2">
              <Heart className="h-4 w-4 mr-2 text-red-600" />
              Dukung Developer
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Bantu Kami Terus Berkembang</h2>
            <p className="text-xl text-amber-800/90 max-w-2xl mx-auto">
              Kelola Akademik gratis untuk semua sekolah. Jika sistem ini bermanfaat, dukung kami untuk terus
              mengembangkan fitur-fitur terbaru.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Donation Card */}
              <Card className="border-2 border-orange-400/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-md rounded-2xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:from-orange-400 hover:to-red-400">
                    <Coffee className="h-8 w-8 text-orange-800" />
                  </div>
                  <CardTitle className="text-2xl text-amber-900">Saweria</CardTitle>
                  <CardDescription className="text-amber-800/90">
                    Belikan kami kopi untuk semangat coding yang lebih tinggi
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <p className="text-sm text-amber-800/90">
                      Donasi mulai dari Rp 5.000 sudah sangat membantu kami untuk:
                    </p>
                    <ul className="text-sm text-amber-800 space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                        Mengembangkan fitur baru
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                        Maintenance server
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                        Meningkatkan performa sistem
                      </li>
                    </ul>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
                    asChild
                  >
                    <Link href="https://saweria.co/kelolaakademik" target="_blank" rel="noopener noreferrer">
                      <Coffee className="mr-2 h-5 w-5" />
                      Dukung via Saweria
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Alternative Support Card */}
              <Card className="border-2 border-yellow-400/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-md rounded-2xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:from-yellow-400 hover:to-amber-400">
                    <Heart className="h-8 w-8 text-yellow-800" />
                  </div>
                  <CardTitle className="text-2xl text-amber-900">Cara Lain Mendukung</CardTitle>
                  <CardDescription className="text-amber-800/90">
                    Tidak harus donasi, ada cara lain untuk membantu kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-900">Rekomendasikan ke Sekolah Lain</h4>
                        <p className="text-sm text-amber-800/90">Bantu sekolah lain merasakan manfaat sistem ini</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Settings className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-900">Berikan Feedback</h4>
                        <p className="text-sm text-amber-800/90">Saran dan masukan untuk perbaikan sistem</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full mt-6 bg-white/70 backdrop-blur-sm border-yellow-400 text-amber-800 hover:bg-yellow-50/80 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
                  >
                    Hubungi Developer
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-amber-200/80 to-yellow-200/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/50">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Terima Kasih! 🙏</h3>
                <p className="text-amber-800/90 max-w-2xl mx-auto">
                  Setiap dukungan dari Anda, baik berupa donasi, review, atau rekomendasi, sangat berarti bagi kami.
                  Bersama-sama kita wujudkan sistem pendidikan Indonesia yang lebih baik dan modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Siap Meningkatkan Efisiensi Sekolah Anda?</h2>
          <p className="text-xl opacity-90 mb-8">
            Bergabunglah dengan ratusan sekolah yang telah merasakan kemudahan mengelola administrasi akademik dengan
            Kelola Akademik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
            >
              <Link href="/dashboard">
                Akses Dashboard Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-amber-700 bg-transparent transition-all duration-300 shadow-lg hover:shadow-xl rounded-full"
            >
              Hubungi Tim Kami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
