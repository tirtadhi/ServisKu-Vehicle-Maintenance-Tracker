<p align="center">
  <img src="https://img.shields.io/badge/🔧-ServisKu-blue?style=for-the-badge&labelColor=1a365d" alt="ServisKu Logo" />
</p>

<h1 align="center">ServisKu — Pengingat Perawatan Kendaraan</h1>

<p align="center">
  <em>Aplikasi web untuk melacak dan mengingatkan jadwal perawatan motor & mobil Anda</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/LocalStorage-4A5568?style=flat-square&logo=databricks&logoColor=white" />
  <img src="https://img.shields.io/badge/Bahasa-Indonesia%20🇮🇩-red?style=flat-square" />
  <img src="https://img.shields.io/badge/Lisensi-MIT-green?style=flat-square" />
</p>

---

## 📖 Tentang

**ServisKu** adalah aplikasi web ringan berbahasa Indonesia yang membantu pemilik kendaraan untuk **mengingat dan melacak** komponen apa saja yang perlu diganti atau diservis berdasarkan **kilometer** dan **waktu pemakaian**.

Tidak perlu lagi bingung kapan terakhir ganti oli, kapan waktunya ganti V-Belt, atau sudah berapa km sejak ganti kampas rem — **ServisKu mencatat semuanya untuk Anda!**

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🏍️🚗 **Multi Kendaraan** | Dukung motor & mobil, transmisi matic & manual |
| 📊 **Dashboard Visual** | Ringkasan status seluruh komponen dengan indikator warna |
| 🔧 **30+ Komponen** | Daftar komponen lengkap sesuai jenis & transmisi kendaraan |
| 🟢🟡🔴 **Status Otomatis** | Hitung otomatis: Aman, Hampir Waktunya, atau Segera Ganti |
| 📏 **Tracking KM & Waktu** | Lacak berdasarkan kilometer DAN waktu pemakaian |
| 📋 **Riwayat Servis** | Catatan lengkap setiap servis: tanggal, bengkel, biaya, dll |
| 🌙 **Dark Mode** | Tema gelap untuk kenyamanan mata |
| 📥📤 **Ekspor / Impor** | Backup & restore data ke file JSON |
| 📱 **Responsive** | Tampilan optimal di desktop, tablet, dan handphone |
| 🔒 **Offline & Privat** | Data tersimpan di browser (LocalStorage), tanpa server |

## 🏍️ Daftar Komponen yang Dilacak

<details>
<summary><strong>Motor Matic (24 komponen)</strong></summary>

| Kategori | Komponen | Interval KM |
|---|---|---|
| 🔧 Mesin | Oli Mesin | 2.000 km |
| 🔧 Mesin | Oli Gardan/Transmisi | 8.000 km |
| 🔧 Mesin | Busi | 8.000 km |
| 🔧 Mesin | Filter Udara | 8.000 km |
| ⚙️ Transmisi | V-Belt | 15.000 km |
| ⚙️ Transmisi | Roller | 15.000 km |
| ⚙️ Transmisi | Per CVT / Per Sentrifugal | 20.000 km |
| ⚙️ Transmisi | Kampas Ganda (Kopling) | 20.000 km |
| 🛑 Rem | Kampas Rem Depan & Belakang | 15.000 km |
| 🛑 Rem | Minyak Rem | 20.000 km |
| 🛞 Ban & Roda | Ban Depan & Belakang | 15.000–20.000 km |
| 🛞 Ban & Roda | Bearing Roda | 30.000 km |
| 🔋 Kelistrikan | Aki / Baterai | 30.000 km |
| 🔋 Kelistrikan | Lampu Depan & Belakang | 30.000–40.000 km |
| 🧊 Pendingin | Coolant / Air Radiator | 20.000 km |
| 🧊 Pendingin | Selang Radiator | 40.000 km |
| 🔩 Lain-lain | Kabel Gas, Knalpot, Shock | 20.000–40.000 km |

</details>

<details>
<summary><strong>Motor Manual (22 komponen)</strong></summary>

Sama seperti motor matic, namun dengan perbedaan:
- ⛓️ **Rantai & Gear Set** (menggantikan V-Belt & Roller)
- 🥏 **Kampas Kopling** (menggantikan Kampas Ganda)
- 🧵 **Kabel Kopling**

</details>

<details>
<summary><strong>Mobil Matic (28 komponen)</strong></summary>

| Kategori | Komponen | Interval KM |
|---|---|---|
| 🔧 Mesin | Oli Mesin | 5.000 km |
| 🔧 Mesin | Oli Transmisi Matic | 40.000 km |
| 🔧 Mesin | Oli Gardan | 40.000 km |
| 🔧 Mesin | Filter Oli | 10.000 km |
| 🔧 Mesin | Filter Udara, Filter AC, Filter BBM | 15.000–40.000 km |
| 🔧 Mesin | Busi | 20.000 km |
| 🔧 Mesin | Timing Belt / Chain | 80.000 km |
| 🔧 Mesin | Fan Belt / V-Belt | 40.000 km |
| 🛑 Rem | Kampas Rem Depan & Belakang | 30.000–40.000 km |
| 🛑 Rem | Piringan / Disk Rem | 60.000–80.000 km |
| 🛑 Rem | Minyak Rem | 40.000 km |
| 🛞 Ban | Ban Depan & Belakang | 40.000 km |
| 🛞 Ban | Spooring & Balancing | 10.000 km |
| 🛞 Ban | Rotasi Ban | 10.000 km |
| 🔋 Kelistrikan | Aki | 60.000 km |
| 🧊 Pendingin | Coolant, Freon AC | 40.000 km |
| 🔩 Lain-lain | Wiper, Power Steering, Shock Absorber | 20.000–50.000 km |

</details>

<details>
<summary><strong>Mobil Manual (30 komponen)</strong></summary>

Sama seperti mobil matic, dengan tambahan:
- 🥏 **Kampas Kopling** — 60.000 km
- 🔧 **Master Kopling** — 80.000 km

</details>

## 🖼️ Tangkapan Layar

```
📊 Dashboard          🏍️ Daftar Kendaraan      🔧 Catat Servis
┌──────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ 🔴 3 Segera  │     │ 🏍️ Honda Beat    │     │ ☑ Oli Mesin      │
│ 🟡 5 Hampir  │     │   📏 15.000 km   │     │ ☑ Busi           │
│ 🟢 16 Aman   │     │   🔴 3 🟡 5 🟢16 │     │ ☐ Filter Udara   │
│              │     │                  │     │ 💰 Rp 150.000    │
│ 🔴 Oli Mesin │     │ 🚗 Toyota Avanza │     │ 🏪 Bengkel Jaya  │
│ 🔴 V-Belt    │     │   📏 45.000 km   │     │                  │
│ 🟡 Busi      │     │   🔴 1 🟡 3 🟢24 │     │ [💾 Simpan]      │
└──────────────┘     └──────────────────┘     └──────────────────┘
```

## 🚀 Cara Menggunakan

### 1. Langsung Buka di Browser

```bash
# Clone repository
git clone https://github.com/username/servisku.git

# Buka file index.html di browser
# Atau klik dua kali pada file index.html
```

> **Tidak perlu install apapun!** Cukup buka `index.html` di browser modern (Chrome, Firefox, Edge, dll).

### 2. Langkah Penggunaan

1. **Tambah Kendaraan** — Klik tab "Kendaraan" → "+ Tambah Kendaraan"
2. **Isi Data** — Pilih jenis (motor/mobil), transmisi, merk, tipe, km saat ini
3. **Lihat Dashboard** — Status semua komponen langsung terlihat
4. **Catat Servis** — Klik tab "Servis" → pilih kendaraan → centang komponen yang diganti
5. **Update KM** — Update kilometer secara berkala agar status akurat
6. **Cek Riwayat** — Lihat semua catatan servis di tab "Riwayat"

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|---|---|
| **HTML5** | Struktur halaman |
| **CSS3** | Styling & responsive design dengan CSS Variables |
| **Vanilla JavaScript** | Logic aplikasi, tanpa framework |
| **LocalStorage** | Penyimpanan data di browser |

## 📁 Struktur File

```
servisku/
├── index.html      # Halaman utama
├── style.css       # Stylesheet (light & dark mode)
├── app.js          # Logic aplikasi & data komponen
└── README.md       # Dokumentasi
```

## 💾 Data & Privasi

- ✅ Semua data tersimpan **lokal di browser** Anda (LocalStorage)
- ✅ **Tidak ada server** — tidak ada data yang dikirim ke mana pun
- ✅ Gunakan fitur **Ekspor (📥)** untuk backup data ke file JSON
- ✅ Gunakan fitur **Impor (📤)** untuk restore data dari file backup
- ⚠️ Menghapus data browser akan menghapus data aplikasi — **selalu backup!**

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. **Fork** repository ini
2. Buat **branch** baru (`git checkout -b fitur-baru`)
3. **Commit** perubahan (`git commit -m 'Tambah fitur baru'`)
4. **Push** ke branch (`git push origin fitur-baru`)
5. Buat **Pull Request**

### Ide Pengembangan

- [ ] Notifikasi push browser
- [ ] Sinkronisasi cloud (Firebase/Supabase)
- [ ] Grafik pengeluaran servis per bulan
- [ ] Reminder via WhatsApp/Telegram
- [ ] PWA (Progressive Web App) agar bisa di-install
- [ ] Estimasi biaya servis berikutnya
- [ ] Multi bahasa (English support)

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

<p align="center">
  Dibuat dengan ❤️ untuk komunitas otomotif Indonesia 🇮🇩
</p>

<p align="center">
  <strong>⭐ Jangan lupa beri bintang jika proyek ini bermanfaat!</strong>
</p>
