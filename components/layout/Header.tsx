"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "@/public/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/upholstery", label: "Upholstery" },
    { href: "/custom-furniture", label: "Custom Furniture" },
    { href: "/headboards", label: "Headboards" },
    { href: "/window-coverings", label: "Window Coverings" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full z-50 bg-white shadow-md border-b border-gray-200">
      {/* === TOP INFO BAR === */}
      <div className="hidden lg:block bg-[#002f61] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 opacity-90">
              <Phone className="w-4 h-4" />
              <a href="tel:4032550673" className="hover:text-gray-200">
                (403) 255-0673
              </a>
            </div>
            <div className="flex items-center space-x-2 opacity-90">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@chinookupholstery.com" className="hover:text-gray-200">
                info@chinookupholstery.com
              </a>
            </div>
            <div className="flex items-center space-x-2 opacity-90">
              <MapPin className="w-4 h-4" />
              <span>D6 6115 3 St SE, Calgary, AB T2H 1K1</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-90">
            <Clock className="w-4 h-4" />
            <span>Mon–Fri: 9am–5:30pm | Sat: 10am–5pm</span>
          </div>
        </div>
      </div>

      {/* === MAIN HEADER === */}
      <div className="sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[180px] sm:w-[200px]">
              <Image
                src={Logo}
                alt="Chinook Upholstery"
                width={200}
                height={100}
                priority
                className="h-auto w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[15px] font-semibold text-gray-800 hover:text-[#002f61] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#002f61] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Phone Button on Desktop */}
          <a
            href="tel:4032550673"
            className="hidden lg:flex items-center space-x-2 bg-[#002f61] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#00448a] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center p-2 text-gray-800"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 shadow-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-gray-900 hover:text-[#002f61] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <a href="tel:4032550673" className="flex items-center gap-2 text-gray-800">
                <Phone className="w-4 h-4 text-[#002f61]" /> (403) 255-0673
              </a>
              <a
                href="mailto:info@chinookupholstery.com"
                className="flex items-center gap-2 text-gray-800"
              >
                <Mail className="w-4 h-4 text-[#002f61]" /> info@chinookupholstery.com
              </a>
              <p className="flex items-start gap-2 text-gray-700 text-sm">
                <MapPin className="w-4 h-4 mt-1 text-[#002f61]" />
                D6 6115 3 St SE, Calgary, AB
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
