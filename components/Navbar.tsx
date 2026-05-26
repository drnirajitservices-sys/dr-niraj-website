import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left Section */}

        <div className="flex items-center gap-3">

          {/* Logo */}

          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm">

            <Image
              src="/logo.png"
              alt="Doctor Logo"
              fill
              className="object-cover"
            />

          </div>

          {/* Doctor Info */}

          <div>

            <h1 className="text-2xl font-bold text-blue-950 tracking-tight leading-none">
              Dr. Niraj Kumar
            </h1>

            <p className="text-sm text-slate-600 mt-1">
              General Physician
            </p>

          </div>

        </div>

        {/* Center Navigation */}

        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-700">

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

        {/* CTA Button */}

        <a
          href="#appointment"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-200 transition-all duration-300"
        >
          Book Appointment
        </a>

      </div>

    </nav>
  );
}