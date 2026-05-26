"use client";

// =========================
// APPOINTMENT SECTION
// Create: components/Appointment.tsx
// =========================

import { useState } from "react";

export function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello Dr. Niraj,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Clinic: ${formData.clinic}
Problem: ${formData.problem}
`;

    const whatsappUrl = `https://wa.me/918368289803?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold uppercase tracking-wide">
            Appointment Booking
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Book Your Consultation
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Niraj Kumar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900">
              Appointment Form
            </h3>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <select
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 bg-white"
              >

                <option value="">
                  Select Clinic
                </option>

                <option value="ShardaCare Health City (9AM - 5PM)">
                  ShardaCare Health City (9AM - 5PM)
                </option>

                <option value="Amrit Multispeciality Clinic (6PM - 8PM)">
                  Amrit Multispeciality Clinic (6PM - 8PM)
                </option>

              </select>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-blue-900 font-medium text-lg">
                  Availability: Monday to Saturday
                </p>
              </div>

              <textarea
                rows={5}
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Describe Your Problem"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl text-lg font-semibold transition shadow-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="space-y-8">

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-[2rem] p-10 shadow-2xl">
              <div className="inline-block bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm mb-6">
                Clinic 1
              </div>

              <h3 className="text-3xl font-bold leading-tight">
                ShardaCare Health City
              </h3>

              <div className="mt-8 space-y-5">
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <p className="text-blue-200 font-semibold mb-2">
                    Address
                  </p>

                  <p className="text-slate-200 leading-relaxed">
                    Gate No. 1,Building 10A, Plot No. 32 & 34, Knowledge Park III,
                    Greater Noida, Uttar Pradesh 201310
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <p className="text-blue-200 font-semibold mb-2">
                    Timings
                  </p>

                  <p className="text-slate-200">
                    9AM - 5PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-[2rem] p-10 shadow-2xl">

              <div className="inline-block bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm mb-6">
                Clinic 2
              </div>

              <h3 className="text-3xl font-bold leading-tight">
                Amrit Multispeciality Clinic
              </h3>

              <div className="mt-8 space-y-5">

                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <p className="text-blue-100 font-semibold mb-2">
                    Address
                  </p>

                  <p className="text-blue-50 leading-relaxed">
                    Amrit Complex, Pi-1, B-003, Birondi, Near Unitech Horizon, Gate No. 1, Greater Noida,
                    Uttar Pradesh 201310
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <p className="text-blue-100 font-semibold mb-2">
                    Timings
                  </p>

                  <p className="text-blue-50">
                    6PM - 8PM
                  </p>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}