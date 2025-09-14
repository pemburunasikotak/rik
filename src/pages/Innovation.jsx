export default function Innovation() {
  const products = [
    {
      title: "E-Katalog",
      description: "Platform katalog elektronik yang memudahkan pencarian dan pemesanan produk inovasi kampus.",
      link: "#ekatalog",
    },
    {
      title: "Inovasi Teknologi",
      description: "Berbagai hasil riset dan inovasi teknologi yang siap diaplikasikan di industri.",
      link: "#inovasi-teknologi",
    },
    {
      title: "Produk Kreatif",
      description: "Produk kreatif mahasiswa dan dosen untuk mendukung kebutuhan masyarakat.",
      link: "#produk-kreatif",
    },
  ];

  return (
    <section id="innovation" className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Produk Inovasi
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Menampilkan hasil riset, produk kreatif, dan layanan unggulan 
            dari Politeknik Perkapalan Negeri Surabaya.
          </p>
        </div>
      </div>

      {/* Produk Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <a
                href={product.link}
                className="text-blue-600 font-semibold hover:underline"
              >
                Lihat Selengkapnya →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
