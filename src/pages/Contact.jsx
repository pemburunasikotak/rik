export default function Contact() {
  return (
    <section id="contact" className="pt-20">
      {/* Header */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Kontak Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Silakan hubungi kami untuk pertanyaan, kerja sama, atau informasi lebih lanjut.
          </p>
        </div>
      </div>

      {/* Konten */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Kontak */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Informasi Kontak</h2>
          <p className="text-gray-700 mb-4">
            Kami siap membantu Anda. Silakan gunakan informasi di bawah ini untuk menghubungi kami.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Alamat:</span>  
              Jl. Teknik Kimia, Kampus PPNS, Surabaya
            </li>
            <li>
              <span className="font-semibold">Telepon:</span>  
              (031) 1234567
            </li>
            <li>
              <span className="font-semibold">Email:</span>  
              info@ppns.ac.id
            </li>
            <li>
              <span className="font-semibold">Jam Operasional:</span>  
              Senin - Jumat, 08.00 - 16.00 WIB
            </li>
          </ul>
        </div>

        {/* Form Kontak */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Formulir Kontak</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nama</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pesan</label>
              <textarea
                className="w-full border rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500"
                placeholder="Tulis pesan Anda di sini..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
