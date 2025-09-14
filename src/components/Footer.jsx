import { Link } from "react-router-dom";
import logo from "../aset/logoaset.png";

// contoh logo mitra
import mitra1 from "../aset/mitra/angkasapura.png";
import mitra2 from "../aset/mitra/barata.png";
import mitra3 from "../aset/mitra/boma.png";
import mitra4 from "../aset/mitra/kai.png";
import mitra5 from "../aset/mitra/krakatau.png";
import mitra6 from "../aset/mitra/pal.png";
import mitra7 from "../aset/mitra/pegadaian.png";
import mitra8 from "../aset/mitra/pelindo.png";
import mitra9 from "../aset/mitra/ptba.png";
import mitra10 from "../aset/mitra/ptpn.png";
import mitra11 from "../aset/mitra/sipil.png";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div>
        <div className="text-center bg-white text-black font-bold text-4xl pb-5">Mitra</div>
      </div>
      <div className="bg-white py-4 overflow-hidden pb-5">
        <div className="flex items-center space-x-10 animate-scroll">
          {/* Baris pertama */}
          <img src={mitra1} alt="Mitra 1" className="h-12 object-contain" />
          <img src={mitra2} alt="Mitra 2" className="h-12 object-contain" />
          <img src={mitra3} alt="Mitra 3" className="h-12 object-contain" />
          <img src={mitra4} alt="Mitra 4" className="h-12 object-contain" />
          <img src={mitra5} alt="Mitra 5" className="h-12 object-contain" />
          <img src={mitra6} alt="Mitra 6" className="h-12 object-contain" />
          <img src={mitra7} alt="Mitra 7" className="h-12 object-contain" />
          <img src={mitra8} alt="Mitra 8" className="h-12 object-contain" />
          <img src={mitra9} alt="Mitra 9" className="h-12 object-contain" />
          <img src={mitra10} alt="Mitra 10" className="h-12 object-contain" />
          <img src={mitra11} alt="Mitra 11" className="h-12 object-contain" />

          {/* Baris kedua (duplikat) */}
          <img src={mitra1} alt="Mitra 1" className="h-12 object-contain" />
          <img src={mitra2} alt="Mitra 2" className="h-12 object-contain" />
          <img src={mitra3} alt="Mitra 3" className="h-12 object-contain" />
          <img src={mitra4} alt="Mitra 4" className="h-12 object-contain" />
          <img src={mitra5} alt="Mitra 5" className="h-12 object-contain" />
          <img src={mitra6} alt="Mitra 6" className="h-12 object-contain" />
          <img src={mitra7} alt="Mitra 7" className="h-12 object-contain" />
          <img src={mitra8} alt="Mitra 8" className="h-12 object-contain" />
          <img src={mitra9} alt="Mitra 9" className="h-12 object-contain" />
          <img src={mitra10} alt="Mitra 10" className="h-12 object-contain" />
          <img src={mitra11} alt="Mitra 11" className="h-12 object-contain" />
        </div>
      </div>

      {/* ==== Isi Footer ==== */}
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
            RIK PPNS menyediakan layanan aset, pelatihan, dan inovasi untuk
            mendukung kebutuhan pendidikan, riset, dan industri.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-gray-300">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/innovation" className="hover:text-gray-300">
                Produk Inovasi
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Kontak Kami
              </Link>
            </li>
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
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              🌐
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              📷
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              🐦
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} RIK PPNS. All rights reserved.
      </div>
    </footer>
  );
}
