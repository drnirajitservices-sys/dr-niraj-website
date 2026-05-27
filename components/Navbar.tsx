"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-[82px] md:h-20 flex items-center justify-between">

        {/* Left Section */}

        <div className="flex items-center gap-2 md:gap-3 min-w-0">

          {/* Logo */}

          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm flex-shrink-0">

            <Image
              src="/logo.png"
              alt="Doctor Logo"
              fill
              className="object-cover"
            />

          </div>

          {/* Doctor Info */}

          <div className="leading-tight">

            <h1 className="text-[18px] sm:text-[20px] md:text-2xl font-bold text-blue-950 tracking-tight leading-none">
              Dr. Niraj Kumar
            </h1>

            <p className="text-xs md:text-sm text-slate-600 mt-1">
              General Physician
            </p>

          </div>

        </div>

        {/* Center Navigation */}

        <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-700">

          <a
            href="#"
            className="relative hover:text-blue-700 transition duration-300 group"
          >
            Home

            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            className="relative hover:text-blue-700 transition duration-300 group"
          >
            About

            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#services"
            className="relative hover:text-blue-700 transition duration-300 group"
          >
            Services

            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="relative hover:text-blue-700 transition duration-300 group"
          >
            Contact

            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
          </a>

        </div>

        <div className="flex items-center gap-3">

          {/* Desktop Button */}

          <a
            href="#appointment"
            className="hidden sm:flex bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold shadow-lg hover:shadow-blue-200 transition-all duration-300 text-center leading-tight"
          >
            Book Appointment
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>
      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="lg:hidden px-4 pb-5 pt-2 bg-white border-t border-slate-100 shadow-md animate-in slide-in-from-top duration-300">

          <div className="flex flex-col gap-4 text-slate-700 font-medium">

            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Contact
            </a>

            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 bg-blue-700 text-white py-3 rounded-xl text-center font-semibold"
            >
              Book Appointment
            </a>

          </div>

        </div>

      )}
    </nav>
  );
}