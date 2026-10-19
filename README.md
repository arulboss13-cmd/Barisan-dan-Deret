# Ruang Matematika v2 — Barisan dan Deret

Prototipe pengembangan bahan ajar interaktif untuk skripsi S1 Pendidikan Matematika. Teknologi antarmuka: HTML, CSS, JavaScript. Dapat dibuka dan dikembangkan di VS Code, lalu dipublikasikan melalui GitHub Pages.

## Fitur yang ada di prototipe

- Desain responsif desktop dan ponsel.
- Navigasi: Beranda, Identitas & Tujuan, Peta Pembelajaran, Materi 8 Pertemuan, Video YouTube, Laboratorium Pola, Kuis Interaktif, Progres Belajar, Refleksi, Glosarium, Referensi, Dashboard Guru, Pengaturan.
- Konten materi, video, kuis, refleksi, glosarium, dan referensi dimulai kosong serta bisa ditambah, diedit, dan dihapus melalui Mode Guru.
- Kuis pilihan ganda dengan skor otomatis dan pembahasan.
- Simulasi barisan aritmetika dengan parameter suku pertama, beda, dan jumlah suku, termasuk grafik SVG.
- Progres pertemuan dan poin belajar pada perangkat lokal.
- Pengaturan aksesibilitas: ukuran teks, kontras, dan pengurangan animasi.
- Ekspor/impor cadangan JSON.
- Contoh skema database Supabase pada `supabase/schema.sql`.

## Menjalankan di VS Code

1. Ekstrak folder proyek.
2. Buka folder `ruang_matematika_v2` melalui VS Code.
3. Cara paling mudah: pasang ekstensi **Live Server**, lalu klik kanan `index.html` → **Open with Live Server**.
4. PIN demo awal: `246810`. Ganti sebelum demonstrasi. PIN ini hanya untuk prototipe lokal, bukan autentikasi aman.
5. Semua materi dan bank soal masih kosong. Tambahkan melalui Mode Guru.

## Publikasi GitHub Pages

1. Buat repositori baru di GitHub.
2. Unggah `index.html`, `style.css`, `app.js`, `config.js`, `README.md`, dan folder `supabase`.
3. Buka Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Buka URL Pages setelah deployment selesai.

## Data lokal dan backend

Versi awal menyimpan konten, progres, serta percobaan kuis di `localStorage`. Data tidak otomatis tersinkron antargawai dan bukan dashboard kelas bersama.

Untuk database bersama, Supabase dapat digunakan:
1. Buat proyek Supabase.
2. Jalankan SQL di `supabase/schema.sql` melalui SQL Editor.
3. Masukkan Project URL dan anon/publishable key di `config.js`, lalu atur `enableSupabase: true` setelah integrasi API dan autentikasi benar-benar diimplementasikan.
4. Rancang autentikasi Supabase Auth dan peran `teacher`/`student`.
5. Buat kebijakan RLS untuk peran guru secara ketat. SQL contoh sengaja belum memberi hak tulis guru karena peran guru harus diverifikasi dengan aman.
6. Implementasikan operasi CRUD dan sinkronisasi dari `app.js` ke Supabase sebelum menganggap dashboard lintas perangkat berfungsi.

**Penting:** menyetel `enableSupabase: true` saja belum mengaktifkan integrasi database. Kode CRUD Supabase dan alur login produksi masih merupakan pekerjaan pengembangan berikutnya. Jangan pernah memasukkan `service_role` key ke `config.js` atau kode frontend.

## Rancangan konten 8 pertemuan (opsi)

1. Pola bilangan dan pengenalan barisan.
2. Barisan aritmetika.
3. Suku ke-n barisan aritmetika.
4. Deret aritmetika.
5. Barisan geometri.
6. Suku ke-n barisan geometri.
7. Deret geometri.
8. Penerapan kontekstual, evaluasi, dan refleksi.

Sesuaikan rancangan dengan kurikulum/capaian pembelajaran sekolah, fase/kelas, alokasi waktu, dan arahan pembimbing. Konten awal sengaja tidak dipraisi; kerangka pertemuan merupakan usulan.

## Rekomendasi model ADDIE untuk skripsi

- **Analysis:** analisis kebutuhan guru/siswa, kurikulum, karakteristik siswa, kendala pembelajaran, perangkat dan akses internet.
- **Design:** susun tujuan, alur 8 pertemuan, storyboard, asesmen, rubrik, dan rancangan UI.
- **Development:** bangun fitur, validasi ahli materi/media, revisi, serta uji fungsi dan aksesibilitas.
- **Implementation:** uji coba terbatas sesuai izin sekolah, persetujuan yang diperlukan, dan prosedur penelitian.
- **Evaluation:** evaluasi validitas, kepraktisan, dan/atau efektivitas sesuai pertanyaan penelitian dan data yang dikumpulkan.

Produk ini adalah prototipe teknis, bukan bukti bahwa media telah valid, praktis, atau efektif. Hindari memasukkan data pribadi siswa yang tidak diperlukan; tetapkan prosedur persetujuan dan privasi sebelum pengujian.


## Pembaruan versi: pertemuan fleksibel dan logo institusi
- Buka menu **Peta Pembelajaran** dalam Mode Guru untuk menambah pertemuan, mengubah judul, atau menghapus pertemuan. Jumlah pertemuan dan tampilan progres menyesuaikan daftar tersebut.
- Buka **Identitas & Tujuan** dalam Mode Guru untuk mengunggah logo kampus dan/atau sekolah. Logo ditampilkan pada sidebar serta halaman identitas.
- Format logo yang disarankan: PNG atau WebP dengan latar transparan; ukuran berkas maksimal 1 MB per logo. Logo disimpan di penyimpanan lokal browser dan ikut dalam ekspor JSON.
- Karena data disimpan lokal pada prototipe, perubahan tidak otomatis tersinkron ke browser/perangkat lain. Ekspor cadangan secara berkala.


## Pembaruan Laboratorium Pola
Laboratorium Pola kini menyediakan empat mode simulasi yang dapat dipilih melalui menu **Jenis simulasi**:
- **Barisan aritmetika** — mengubah suku pertama dan beda; menampilkan suku dan grafik.
- **Deret aritmetika** — menampilkan suku, jumlah parsial setiap tahap, jumlah total, dan grafik jumlah parsial.
- **Barisan geometri** — mengubah suku pertama dan rasio; menampilkan suku dan grafik.
- **Deret geometri** — menampilkan suku, jumlah parsial setiap tahap, jumlah total, dan grafik jumlah parsial.

Gunakan penggeser **suku pertama (a)**, **beda (d)/rasio (r)**, dan **banyak suku (n)**. Nilai serta grafik diperbarui secara langsung saat parameter diubah.
