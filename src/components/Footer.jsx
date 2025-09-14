import { Link } from "react-router-dom";
import logo from "../aset/logoaset.png";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={logo}
              alt="Logo RIK PPNS"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg">RIK PPNS</span>
          </div>
          <p className="text-sm leading-relaxed">
            RIK PPNS menyediakan layanan aset, pelatihan, dan inovasi untuk mendukung kebutuhan pendidikan, riset, dan industri.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-gray-300">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Layanan</Link></li>
            <li><Link to="/innovation" className="hover:text-gray-300">Produk Inovasi</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Kontak Kami</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Kontak</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Jl. Teknik Kimia, Surabaya</li>
            <li>📞 (031) 123-4567</li>
            <li>✉️ rik@ppns.ac.id</li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">🌐</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">📷</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">🐦</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} RIK PPNS. All rights reserved.
      </div>
    </footer>
  );
}
