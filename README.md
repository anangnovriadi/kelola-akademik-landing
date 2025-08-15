# Kelola Akademik Landing Page

Halaman landing untuk sistem manajemen akademik **Kelola Akademik** - platform all-in-one yang membantu sekolah mengelola siswa, presensi, dan administrasi dengan lebih efektif dan terorganisir.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/anang-novriadis-projects/v0-kelola-akademik-dashboard)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/CZ1gmZ9SdGG)

## 🚀 Demo

**Live Demo:** [https://vercel.com/anang-novriadis-projects/v0-kelola-akademik-dashboard](https://vercel.com/anang-novriadis-projects/v0-kelola-akademik-dashboard)

## 📋 Fitur

- 🎨 **Modern Design** - Interface yang clean dan user-friendly
- 📱 **Responsive** - Optimal di semua perangkat (desktop, tablet, mobile)
- ⚡ **Fast Loading** - Optimized untuk performa terbaik
- 🎯 **SEO Friendly** - Meta tags dan struktur yang SEO-optimized
- 🌙 **Smooth Animations** - Transisi dan animasi yang halus
- 📊 **Dashboard Preview** - Tampilan preview sistem dashboard
- 💝 **Support Section** - Integrasi dengan Saweria dan WhatsApp

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) & [Poppins](https://fonts.google.com/specimen/Poppins)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Prerequisites

Pastikan Anda sudah menginstall:

- **Node.js** (versi 18.0 atau lebih baru)
- **npm**, **yarn**, atau **pnpm**

## 🚀 Setup & Installation

### 1. Clone Repository

\`\`\`bash
git clone https://github.com/your-username/kelola-akademik-landing.git
cd kelola-akademik-landing
\`\`\`

### 2. Install Dependencies

Pilih salah satu package manager:

\`\`\`bash
# Menggunakan npm
npm install

# Menggunakan yarn
yarn install

# Menggunakan pnpm
pnpm install
\`\`\`

### 3. Jalankan Development Server

\`\`\`bash
# Menggunakan npm
npm run dev

# Menggunakan yarn
yarn dev

# Menggunakan pnpm
pnpm dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## 🏗️ Build & Production

### Build untuk Production

\`\`\`bash
# Menggunakan npm
npm run build

# Menggunakan yarn
yarn build

# Menggunakan pnpm
pnpm build
\`\`\`

### Jalankan Production Server

\`\`\`bash
# Menggunakan npm
npm start

# Menggunakan yarn
yarn start

# Menggunakan pnpm
pnpm start
\`\`\`

### Preview Build Locally

\`\`\`bash
# Build terlebih dahulu
npm run build

# Kemudian jalankan
npm start
\`\`\`

## 📁 Struktur Project

\`\`\`
kelola-akademik-landing/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── navbar.tsx           # Navigation component
│   └── footer.tsx           # Footer component
├── public/
│   ├── *.png                # Dashboard screenshots
│   └── *.svg                # Icons and logos
├── lib/
│   └── utils.ts             # Utility functions
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── README.md
\`\`\`

## 🎨 Customization

### Mengubah Warna Theme

Edit file `app/globals.css` untuk mengubah color scheme:

\`\`\`css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... */
}
\`\`\`

### Menambah/Mengubah Konten

- **Hero Section:** Edit di `app/page.tsx` bagian Hero Section
- **Features:** Ubah array `features` di `app/page.tsx`
- **Dashboard Images:** Ganti file di folder `public/`

### Mengubah Font

Edit di `app/layout.tsx`:

\`\`\`typescript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ /* config */ })
const poppins = Poppins({ /* config */ })
\`\`\`

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub repository
2. Import project di [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy otomatis akan berjalan

### Deploy ke Platform Lain

\`\`\`bash
# Build project
npm run build

# Upload folder .next dan file lainnya ke hosting
\`\`\`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

- **Developer:** Anang Novriadi
- **WhatsApp:** [+62 858-1620-3961](https://wa.me/6285816203961)
- **Saweria:** [saweria.co/anangnovriadi](https://saweria.co/anangnovriadi)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Deployment platform
- [v0.app](https://v0.app/) - AI-powered development tool

---

**⭐ Jika project ini bermanfaat, jangan lupa berikan star di GitHub!**

**☕ Dukung pengembangan dengan [donasi kopi](https://saweria.co/anangnovriadi)**
