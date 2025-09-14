export default function About() {
  return (
    <section id="about" className="pt-20">
      {/* Header */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mengenal lebih dekat tentang RIK PPNS, visi & misi kami, serta
            struktur organisasi yang mendukung keberlangsungan layanan.
          </p>
        </div>
      </div>
      <div id="about-sambutan" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Sambutan
        </h2>
        <div className="text-gray-700 leading-relaxed">
          <iframe
            className="w-full h-[70vh] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/FsWwV9mDyiI?autoplay=1&start=4"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Visi & Misi */}
      <div id="about-visi-misi" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Visi & Misi</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi pusat layanan dan inovasi yang unggul dalam mendukung
                pendidikan, penelitian, dan pengabdian masyarakat berbasis
                teknologi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Misi</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Menyediakan layanan aset, pelatihan, dan pengujian
                  laboratorium.
                </li>
                <li>
                  Mendukung inovasi produk dan jasa yang bermanfaat bagi
                  industri.
                </li>
                <li>
                  Meningkatkan kualitas sumber daya manusia melalui pelatihan
                  kompetensi.
                </li>
                <li>
                  Menjadi mitra strategis dalam pengembangan riset dan
                  teknologi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Struktur Organisasi */}
      <div id="about-struktur" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Struktur Organisasi
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Struktur organisasi RIK PPNS dirancang untuk mendukung kolaborasi yang
          efektif antara berbagai unit layanan, laboratorium, dan divisi
          pengembangan inovasi.
        </p>
        <div className="overflow-x-auto">
          <img
            src="/struktur.png"
            alt="Struktur Organisasi"
            className="mx-auto max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
