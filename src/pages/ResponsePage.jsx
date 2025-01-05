import React, { useEffect } from "react";
import "./ResponsePage.css";

function ResponsePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <header className="header animate-section">
        <h1 className="title">
          Panduan Penanganan Pertama untuk Kebakaran dan Banjir
        </h1>
        <p className="subtitle">
          Lindungi diri Anda dan keluarga dengan langkah-langkah awal yang tepat
        </p>
      </header>

      <main className="content">
        <section className="article-section animate-section">
          <h2 className="section-title">Penanganan Pertama untuk Kebakaran</h2>
          <p>
            Kebakaran adalah keadaan darurat yang memerlukan tindakan cepat.
            Berikut langkah-langkah penanganan pertama yang harus Anda lakukan:
          </p>
          <ul>
            <li>
              Segera evakuasi diri dan orang lain dari area yang terbakar.
            </li>
            <li>
              Jika memungkinkan, matikan sumber api kecil dengan alat pemadam
              api ringan (APAR).
            </li>
            <li>
              Hindari penggunaan lift saat evakuasi; gunakan tangga darurat.
            </li>
            <li>
              Jika pakaian Anda terbakar, ingatlah: berhenti, jatuhkan diri, dan
              berguling.
            </li>
            <li>Hubungi layanan darurat di 112 atau nomor lokal lainnya.</li>
          </ul>
        </section>

        <section className="article-section animate-section">
          <h2 className="section-title">Penanganan Pertama untuk Banjir</h2>
          <p>
            Banjir dapat terjadi secara tiba-tiba, sehingga persiapan dan
            penanganan awal sangat penting:
          </p>
          <ul>
            <li>
              Pindahkan barang-barang berharga ke tempat yang lebih tinggi.
            </li>
            <li>
              Segera evakuasi ke lokasi yang lebih aman atau pos pengungsian.
            </li>
            <li>Hindari berjalan atau mengemudi di arus air yang deras.</li>
            <li>
              Pastikan persediaan air minum bersih, makanan, dan obat-obatan
              tersedia.
            </li>
            <li>
              Ikuti arahan dari petugas berwenang melalui radio atau media
              sosial.
            </li>
          </ul>
        </section>

        <footer className="footer animate-section">
          <p>
            Tetaplah waspada dan persiapkan diri Anda untuk menghadapi bencana.
            Dengan langkah awal yang tepat, Anda dapat melindungi diri dan
            keluarga dari bahaya.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default ResponsePage;
