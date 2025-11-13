"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sofa,
  BedDouble,
  Ruler,
  PanelRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

const services = [
  { name: "Upholstery", icon: <Sofa className="w-5 h-5" />, href: "/upholstery" },
  { name: "Custom Furniture", icon: <Ruler className="w-5 h-5" />, href: "/custom-furniture" },
  { name: "Headboards", icon: <BedDouble className="w-5 h-5" />, href: "/headboards" },
  { name: "Window Coverings", icon: <PanelRight className="w-5 h-5" />, href: "/window-coverings" },
];

export default function ServiceSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🟦 Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-24 left-3 z-40 md:hidden bg-[#002f61] text-white p-3 rounded-full shadow-lg hover:bg-[#00428b] transition-all duration-300"
        aria-label="Open services menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* 🧭 Sidebar Drawer for Mobile */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-[#002f61]">Our Services</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-[#002f61] transition"
            aria-label="Close services menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-5 space-y-3 overflow-y-auto">
          {services.map((service) => {
            const isActive = pathname.includes(service.href);
            return (
              <Link
                key={service.name}
                href={service.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#002f61] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#f3f6fa] hover:text-[#002f61]"
                }`}
              >
                <span
                  className={`transition-all duration-300 ${
                    isActive ? "text-white" : "text-[#002f61]"
                  }`}
                >
                  {service.icon}
                </span>
                {service.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-5 border-t border-gray-200">
          <div className="bg-[#002f61] text-white rounded-xl p-5 text-center shadow-md">
            <Mail className="w-8 h-8 mx-auto mb-3 opacity-90" />
            <h4 className="font-semibold text-lg mb-2">Need Assistance?</h4>
            <p className="text-sm text-gray-100 mb-3 leading-snug">
              Have questions about our services? We’re happy to help!
            </p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-white text-[#002f61] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>

      {/* 💻 Regular Sidebar for Desktop */}
      <aside className="hidden md:block bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-72 sticky top-15 self-start">
        <h3 className="text-xl font-semibold text-[#002f61] mb-4">Our Services</h3>
        <div className="border-b border-gray-200 mb-5"></div>

        <nav className="space-y-3">
          {services.map((service) => {
            const isActive = pathname.includes(service.href);
            return (
              <Link
                key={service.name}
                href={service.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#002f61] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#f3f6fa] hover:text-[#002f61]"
                }`}
              >
                <span
                  className={`transition-all duration-300 ${
                    isActive ? "text-white" : "text-[#002f61]"
                  }`}
                >
                  {service.icon}
                </span>
                {service.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="bg-[#002f61] text-white rounded-xl p-5 text-center shadow-md">
          <Mail className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h4 className="font-semibold text-lg mb-2">Need Assistance?</h4>
          <p className="text-sm text-gray-100 mb-3 leading-snug">
            Have questions about our services? We’re happy to help!
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#002f61] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
