# Agus Padilah — Portfolio & Engineering Showcase

Modern neo-brutalist portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. Optimized for static export and deployment to **GitHub Pages**.

---

## 🚀 Panduan Deployment ke GitHub Pages (CI/CD)

Repositori ini telah disiapkan untuk build & deploy otomatis ke GitHub Pages menggunakan **GitHub Actions** (`.github/workflows/nextjs.yml`).

### Langkah-langkah Deployment:

1. **Commit & Push Perubahan ke GitHub**:
   Pastikan file `package-lock.json` ikut ter-commit ke repositori:
   ```bash
   git add .
   git commit -m "fix: add package-lock.json & configure github pages workflow"
   git push origin main
   ```

2. **Aktifkan GitHub Pages via GitHub Actions di Repository Settings**:
   - Buka repositori Anda di GitHub.
   - Buka menu **Settings** → **Pages** (di sidebar sebelah kiri).
   - Pada bagian **Build and deployment** → **Source**, ubah pilihan menjadi **GitHub Actions** (bukan *Deploy from a branch*).

3. **Verifikasi Jalannya Deployment**:
   - Setiap kali melakukan `push` ke branch `main` atau `master`, workflow **Deploy Next.js site to Pages** akan berjalan otomatis.
   - Anda juga bisa men-trigger build manual di tab **Actions** → pilih **Deploy Next.js site to Pages** → klik **Run workflow**.

---

## 🛠️ Ringkasan Fitur Aplikasi

- **Next.js 16 & React 19**: App Router dengan static export (`out/`).
- **AI Automation & Integration**: Showcase pipeline AI, integrasi LLM, dan otomatisasi ekstraksi data bisnis.
- **Portofolio Showcase**: Penekanan metrik performa & studi kasus arsitektur produksi.
- **Organisasi Saat Ini**: Menampilkan hanya peran dan organisasi aktif (Telkomsel & IndoApps).
- **Dark / Light Mode**: Tema neo-brutalist dengan toggle interaktif dan sinkronisasi preferensi sistem/localStorage.
