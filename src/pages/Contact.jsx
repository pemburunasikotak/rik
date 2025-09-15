import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`;
    window.location.href = whatsappUrl;
  };

  const position = [-7.277158528003401, 112.79609035136578];

  const defaultIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"), // Lokasi gambar icon marker
    iconSize: [25, 41], // Ukuran icon
    iconAnchor: [12, 41], // Menyelaraskan anchor dari icon
    popupAnchor: [1, -34], // Menyelaraskan popup
  });

  return (
    <section id="contact" className="pt-20">
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Kontak Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Silakan hubungi kami untuk pertanyaan, kerja sama, atau informasi
            lebih lanjut.
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Lokasi Kami
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Berikut adalah lokasi kami, Anda dapat melihat peta di bawah ini.
          </p>
          {/* Embed Google Maps */}
          <div className="w-full h-[500px]">
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={defaultIcon}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">
                      Politeknik Perkapalan Negeri Surabaya
                    </h3>
                    <p className="text-sm">Kami berada di sini.</p>
                    <a
                      href="https://www.google.com/maps/place/Politeknik+Perkapalan+Negeri+Surabaya/@-7.2773791,112.7958875,17z/data=!3m1!4b1!4m6!3m5!1s0x51044ba3763232d:0x17bb3cab27d545be!8m2!3d-7.2773791!4d112.7958875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-lg bg-blue-300 px-6 py-2 text-black text-sm font-medium hover:bg-blue-700 transition hover:text-white"
                    >
                      Lihat di Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Informasi Kontak
          </h2>
          <p className="text-gray-700 mb-4">
            Kami siap membantu Anda. Silakan gunakan informasi di bawah ini
            untuk menghubungi kami.
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
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Formulir Kontak
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pesan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
