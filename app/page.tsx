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
    <div className="min-h-screen scroll-smooth transition-all duration-300 main-bg-light">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-700 border-none rounded-full px-4 py-2 font-medium"
          >
            Sistem Manajemen Akademik Terdepan
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-800 mb-6 leading-tight">
            Kelola Akademik
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text block">
              Lebih Mudah & Efisien
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-normal">
            Platform manajemen akademik all-in-one yang membantu sekolah mengelola siswa, presensi, dan administrasi
            dengan lebih efektif dan terorganisir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold"
            >
              <Link href="/dashboard">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-slate-50/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-medium"
              onClick={() => scrollToSection("dashboard-preview")}
            >
              Lihat Tampilan Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard-preview" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-slate-300 text-slate-700 bg-white/50 rounded-full px-4 py-2 font-medium"
            >
              Interface Dashboard
            </Badge>
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">Tampilan Dashboard Kelola Akademik</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              Interface yang intuitif dan mudah digunakan untuk mengelola semua aspek akademik sekolah Anda
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Row 1 - Single Dashboard Overview */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 transition-all duration-500 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm ml-4 font-medium">Dashboard - Overview</span>
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
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm ml-4 font-medium">Manajemen Siswa</span>
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
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm ml-4 font-medium">Sistem Presensi</span>
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
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 font-semibold"
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
      <section id="features" className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-slate-300 text-slate-700 bg-white/50 rounded-full px-4 py-2 font-medium"
            >
              Fitur Unggulan
            </Badge>
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">
              Semua yang Anda Butuhkan dalam Satu Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              Fitur lengkap untuk mengelola seluruh aspek administrasi akademik sekolah Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-slate-200/50 bg-white/90 backdrop-blur-md rounded-2xl group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:from-blue-200 group-hover:to-indigo-200">
                    <feature.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl font-display font-semibold text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-600 font-normal">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Developer Section */}
      <section id="support" className="py-20 px-4 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-slate-300 text-slate-700 bg-white/50 rounded-full px-4 py-2 font-medium"
            >
              <Heart className="h-4 w-4 mr-2 text-rose-500" />
              Dukung Developer
            </Badge>
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">Bantu Kami Terus Berkembang</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              Kelola Akademik gratis untuk semua sekolah. Jika sistem ini bermanfaat, dukung kami untuk terus
              mengembangkan fitur-fitur terbaru.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Donation Card */}
              <Card className="border-2 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md rounded-2xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:from-blue-200 hover:to-indigo-200">
                    <Coffee className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-2xl font-display font-semibold text-slate-800">Saweria</CardTitle>
                  <CardDescription className="text-slate-600 font-normal">
                    Belikan kami kopi untuk semangat coding yang lebih tinggi
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <p className="text-sm text-slate-600 font-normal">
                      Donasi mulai dari Rp 5.000 sudah sangat membantu kami untuk:
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2 text-left font-normal">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        Mengembangkan fitur baru
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        Maintenance server
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        Meningkatkan performa sistem
                      </li>
                    </ul>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold"
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
              <Card className="border-2 border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md rounded-2xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:from-slate-200 hover:to-slate-300">
                    <Heart className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-2xl font-display font-semibold text-slate-800">
                    Cara Lain Mendukung
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-normal">
                    Tidak harus donasi, ada cara lain untuk membantu kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Rekomendasikan ke Sekolah Lain</h4>
                        <p className="text-sm text-slate-600 font-normal">
                          Bantu sekolah lain merasakan manfaat sistem ini
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Settings className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Berikan Feedback</h4>
                        <p className="text-sm text-slate-600 font-normal">Saran dan masukan untuk perbaikan sistem</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full mt-6 bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-slate-50/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-medium"
                  >
                    Hubungi Developer
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-slate-100/90 to-blue-100/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Terima Kasih! 🙏</h3>
                <p className="text-slate-600 max-w-2xl mx-auto font-normal">
                  Setiap dukungan dari Anda, baik berupa donasi, review, atau rekomendasi, sangat berarti bagi kami.
                  Bersama-sama kita wujudkan sistem pendidikan Indonesia yang lebih baik dan modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-6">Siap Meningkatkan Efisiensi Sekolah Anda?</h2>
          <p className="text-xl opacity-90 mb-8 font-normal">
            Bergabunglah dengan ratusan sekolah yang telah merasakan kemudahan mengelola administrasi akademik dengan
            Kelola Akademik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6 bg-white text-slate-800 hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold"
            >
              <Link href="/dashboard">
                Akses Dashboard Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-slate-700 bg-transparent transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-medium"
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
