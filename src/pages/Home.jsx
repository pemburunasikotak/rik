import { useEffect, useState } from "react";

import hero1 from "../aset/hero1.png";
import hero2 from "../aset/hero2.png";
import hero3 from "../aset/hero3.png";
import { Link } from "react-router-dom";

const images = [hero1, hero2, hero3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // ganti slide tiap 4 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Selamat Datang di RIK PPNS
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Kami menyediakan layanan aset, pelatihan, dan inovasi untuk
            mendukung pendidikan, riset, dan industri.
          </p>
          <Link
            to="/about"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Highlight Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Tentang Kami
          </h3>
          <p className="text-gray-600">
            Mengenal lebih dekat visi, misi, dan struktur organisasi kami.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Layanan</h3>
          <p className="text-gray-600">
            Berbagai layanan sewa aset, pelatihan, hingga jasa laboratorium.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Produk Inovasi
          </h3>
          <p className="text-gray-600">
            Menyediakan e-katalog produk hasil inovasi kampus.
          </p>
        </div>
      </div>
    </section>
  );
}
