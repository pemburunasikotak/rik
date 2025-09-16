import PdfReader from "./PdfReader";

export default function Services() {
  const services = [
    {
      id: "services-sewa-aset",
      title: "Layanan Sewa Aset",
      desc: "Menyediakan fasilitas dan aset kampus untuk mendukung kebutuhan mitra industri dan masyarakat.",
    },
    {
      id: "services-sewa-pelatihan",
      title: "Layanan Sewa Pelatihan",
      desc: "Berbagai program pelatihan untuk meningkatkan kompetensi SDM.",
    },
    {
      id: "services-tenaga",
      title: "Layanan Tenaga Ahli",
      desc: "Dukungan tenaga ahli dari dosen dan praktisi profesional di bidangnya.",
    },
    {
      id: "services-pengujian",
      title: "Layanan Pengujian Laboratorium",
      desc: "Pengujian kualitas, material, dan standar industri menggunakan fasilitas laboratorium.",
    },
    {
      id: "services-bisnis",
      title: "Layanan Bisnis Jasa dan Produksi",
      desc: "Kerja sama bisnis dalam produksi barang dan jasa berbasis riset dan inovasi.",
    },
    {
      id: "services-layanan-bahasa",
      title: "Layanan Bahasa",
      desc: "Penerjemahan, kursus bahasa, dan layanan linguistik untuk kebutuhan akademik maupun industri.",
    },
    {
      id: "services-politeknik",
      title: "Layanan Poliklinik",
      desc: "Pelayanan kesehatan melalui klinik kampus dengan tenaga medis profesional.",
    },
    {
      id: "services-layanan-jasa",
      title: "Layanan Jasa Produksi Laboratorium",
      desc: "Menyediakan jasa produksi berbasis laboratorium untuk mendukung industri.",
    },
    // { id: "services-informasi-tarif", title: "Informasi Tarif", desc: "Daftar tarif layanan resmi yang dapat diakses oleh masyarakat dan mitra industri." },
  ];

  const pdfData = "./document.pdf";

  return (
    <section id="services" className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Layanan Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan untuk mendukung kebutuhan
            industri, masyarakat, serta pengembangan ilmu pengetahuan dan
            teknologi.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        id={"services-informasi-tarif"}
        className="container mx-auto px-4 py-16"
      >
        <PdfReader pdfData={pdfData} />
      </div>
    </section>
  );
}
