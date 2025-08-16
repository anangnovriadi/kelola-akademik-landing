"use client"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { useEffect, useRef, useState } from "react"

export default function LandingPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Additional useEffect to handle fallback for sections not detected by Intersection Observer
  useEffect(() => {
    const handleScroll = () => {
      const dashboardSection = document.getElementById("dashboard-preview")
      if (dashboardSection) {
        const rect = dashboardSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          setVisibleSections((prev) => new Set([...prev, "dashboard-preview"]))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check immediately

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="min-h-screen scroll-smooth transition-all duration-300 main-bg-light overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-18 md:pt-52 md:pb-46 px-4 relative">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-800 mb-6 leading-tight">
            <span className="block">Kelola Akademik</span>
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text block">
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
              className="text-lg w-full md:w-60 px-8 py-6 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold"
            >
              <Link href="https://my.kaldemik.com">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold cursor-pointer"
              onClick={() => scrollToSection("dashboard-preview")}
            >
              Lihat Tampilan Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section
        id="dashboard-preview"
        ref={(el: any) => (sectionRefs.current["dashboard-preview"] = el)}
        className="pt-20 pb-32 px-4 bg-white/60 backdrop-blur-sm relative"
      >
        <div className="container mx-auto relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              visibleSections.has("dashboard-preview") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-slate-300 text-slate-700 bg-white/50 rounded-full px-4 py-2 font-medium"
            >
              Tampilan Dashboard
            </Badge>
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">Tampilan Dashboard Kelola Akademik</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
              Interface yang intuitif dan mudah digunakan untuk mengelola semua aspek akademik sekolah Anda
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Row 1 - Single Dashboard Overview */}
            <div
              className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${
                visibleSections.has("dashboard-preview")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <img
                src="/presensi.png"
                alt="Dashboard Sistem Presensi Kelola Akademik - Interface lengkap untuk pencatatan kehadiran siswa"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>

            {/* Row 2 - Two Dashboards Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Dashboard Analytics */}
              <div
                className={`max-w-full mx-auto transition-all duration-1000 delay-500 ${
                  visibleSections.has("dashboard-preview") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <img
                  src="/dashboard.png"
                  alt="Dashboard Analytics Kelola Akademik - Grafik statistik siswa dan rekap presensi"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>

              {/* Rekap Presensi Dashboard */}
              <div
                className={`max-w-full mx-auto transition-all duration-1000 delay-700 ${
                  visibleSections.has("dashboard-preview") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <img
                  src="/rekap.png"
                  alt="Rekap Presensi Kelola Akademik - Tabel laporan kehadiran siswa dengan data lengkap"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
              visibleSections.has("dashboard-preview") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 font-semibold"
            >
              <Link href="https://my.kaldemik.com">
                Akses Dashboard Lengkap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={(el: any) => (sectionRefs.current["features"] = el)}
        className="pt-20 pb-32 px-4 bg-white/80 backdrop-blur-sm relative"
      >
        <div className="container mx-auto relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
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
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-slate-200/50 bg-white/90 backdrop-blur-md rounded-2xl group ${
                  visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: visibleSections.has("features") ? `${index * 100}ms` : "0ms",
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4">
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
      <section
        id="support"
        ref={(el: any) => (sectionRefs.current["support"] = el)}
        className="pt-20 pb-32 px-4 bg-white/90 backdrop-blur-sm relative"
      >
        <div className="container mx-auto relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("support") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-slate-300 text-slate-700 bg-white/50 rounded-full px-4 py-2 font-medium"
            >
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
              <Card
                className={`border-2 border-blue-200/50 hover:border-blue-300/70 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md rounded-2xl flex flex-col ${
                  visibleSections.has("support") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: visibleSections.has("support") ? "200ms" : "0ms" }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-2xl font-display font-semibold text-slate-800">Saweria</CardTitle>
                  <CardDescription className="text-slate-600 font-normal">
                    Belikan kami kopi untuk semangat coding yang lebih tinggi. Donasi mulai dari Rp 10.000 sudah sangat
                    membantu kami untuk:
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                      <ul className="text-sm text-slate-600 space-y-3 text-left font-normal">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          <span>Mengembangkan fitur baru</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          <span>Maintenance server</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          <span>Meningkatkan performa sistem</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold mt-auto"
                    asChild
                  >
                    <Link href="https://saweria.co/anangnovriadi" target="_blank" rel="noopener noreferrer">
                      <Coffee className="mr-2 h-5 w-5" />
                      Dukung via Saweria
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Alternative Support Card */}
              <Card
                className={`border-2 border-slate-200/50 hover:border-slate-300/70 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md rounded-2xl flex flex-col ${
                  visibleSections.has("support") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: visibleSections.has("support") ? "400ms" : "0ms" }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-2xl font-display font-semibold text-slate-800">
                    Cara Lain Mendukung
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-normal">
                    Tidak harus donasi, ada cara lain untuk membantu kami mengembangkan sistem ini:
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                      <ul className="text-sm text-slate-600 space-y-3 text-left font-normal">
                        <li className="flex items-center">
                          <Users className="h-4 w-4 text-slate-600 mr-3 flex-shrink-0" />
                          <span>Rekomendasikan ke sekolah lain</span>
                        </li>
                        <li className="flex items-center">
                          <Settings className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          <span>Berikan feedback dan saran</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full bg-white/80 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-slate-50/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-medium mt-auto"
                  >
                    <Link href="https://wa.me/6285816203961" target="_blank" rel="noopener noreferrer">
                      Hubungi Developer
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div
              className={`text-center mt-12 transition-all duration-1000 delay-600 ${
                visibleSections.has("support") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gradient-to-r from-slate-100/90 to-blue-100/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 transition-all duration-300">
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
      <section className="pt-20 pb-32 px-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white relative overflow-hidden">
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <h2 className="text-4xl font-display font-bold mb-6 animate-fade-in-up">
            Siap Meningkatkan Efisiensi Sekolah Anda?
          </h2>
          <p className="text-xl opacity-90 mb-8 font-normal animate-fade-in-up animation-delay-300">
            Bergabunglah dengan ratusan sekolah yang telah merasakan kemudahan mengelola administrasi akademik dengan
            Kelola Akademik.
          </p>
          <div className="flex justify-center animate-fade-in-up animation-delay-500">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg w-60 px-8 py-6 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full font-semibold"
            >
              <Link href="https://my.kaldemik.com">
                Akses Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
