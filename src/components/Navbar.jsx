import { useState, useRef, useEffect } from "react";
import logo from "../aset/logoaset.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  const aboutMenu = [
    { href: "#about-sambutan", label: "Sambutan" },
    { href: "#about-visi-misi", label: "Visi & Misi" },
    { href: "#about-struktur", label: "Struktur Organisasi" },
  ];

  const layananMenu = [
    { href: "#services-sewa-aset", label: "Layanan Sewa Aset" },
    { href: "#services-sewa-pelatihan", label: "Layanan Sewa Pelatihan" },
    { href: "#services-tenaga", label: "Layanan Tenaga Ahli" },
    { href: "#services-pengujian", label: "Layanan Pengujian Laboratorium" },
    { href: "#services-bisnis", label: "Layanan Bisnis Jasa dan Produksi" },
    { href: "#services-layanan-bahasa", label: "Layanan Bahasa" },
    { href: "#services-politeknik", label: "Layanan Poliklinik" },
    {
      href: "#services-layanan-jasa",
      label: "Layanan Jasa Produksi Laboratorium",
    },
    { href: "#services-informasi-tarif", label: "Informasi Tarif" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo RIK PPNS"
            className="h-10 w-10 object-contain"
          />
          <span className="text-blue-900 font-bold text-lg">RIK PPNS</span>
        </a>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex space-x-6 text-blue-900 font-semibold items-center relative"
          ref={dropdownRef}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "border-b-2 border-blue-600 pb-1" : ""
              }`
            }
          >
            Beranda
          </NavLink>

          <div className="relative">
            <button
              onClick={() =>
                setIsDropdownOpen(isDropdownOpen === "about" ? null : "about")
              }
              className="hover:text-blue-600 flex items-center focus:outline-none"
            >
              Tentang Kami ▾
            </button>
            {isDropdownOpen === "about" && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50">
                {aboutMenu.map((item) => (
                  <HashLink
                    key={item.href}
                    smooth
                    to={`/about${item.href}`} // contoh: /about#about-sambutan
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </HashLink>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setIsDropdownOpen(
                  isDropdownOpen === "layanan" ? null : "layanan"
                )
              }
              className="hover:text-blue-600 flex items-center focus:outline-none"
            >
              Layanan ▾
            </button>
            {isDropdownOpen === "layanan" && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50">
                {layananMenu.map((item) => (
                  <HashLink
                    key={item.href}
                    smooth
                    to={`/services${item.href}`} // contoh: /about#about-sambutan
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </HashLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/innovation"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "border-b-2 border-blue-600 pb-1" : ""
              }`
            }
          >
            Produk Inovasi
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "border-b-2 border-blue-600 pb-1" : ""
              }`
            }
          >
            Kontak Kami
          </NavLink>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block ${isActive ? "border-b-2 border-blue-600 pb-1" : ""}`
            }
          >
            Beranda
          </NavLink>

          <details className="block">
            <summary className="cursor-pointer py-2">Tentang Kami</summary>
            <div className="pl-4">
              {aboutMenu.map((item) => (
                <NavLink
                  key={item.href}
                  to={`/about${item.href}`}
                  className={({ isActive }) =>
                    `block py-1 ${isActive ? "text-blue-600 font-bold" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </details>

          <details className="block">
            <summary className="cursor-pointer py-2">Layanan</summary>
            <div className="pl-4">
              {layananMenu.map((item) => (
                <NavLink
                  key={item.href}
                  to={`/services${item.href}`}
                  className={({ isActive }) =>
                    `block py-1 ${isActive ? "text-blue-600 font-bold" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </details>

          <NavLink
            to="/innovation"
            className={({ isActive }) =>
              `block ${isActive ? "border-b-2 border-blue-600 pb-1" : ""}`
            }
          >
            Produk Inovasi
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block ${isActive ? "border-b-2 border-blue-600 pb-1" : ""}`
            }
          >
            Kontak Kami
          </NavLink>
        </div>
      )}
    </nav>
  );
}
