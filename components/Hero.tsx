"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    type: "image",
    image: "/carousel1.jpeg",
  },

  {
    type: "education",
    image: "/dr_neeraj.jpeg",
    title: "STUDIED AT PREMIER INSTITUTES",

    points: [
      "2nd Rank in MD Medicine from Pt. Bhagwat Dayal Sharma University, Rohtak, Haryana",

      "MBBS from JIPMER, Pondicherry",
    ],
  },

  {
    type: "experience",

    images: ["/dr_neerajarmy.jpeg", "/dr_neerajpolice.jpeg"],

    title: "Experience",

    points: [
      "Senior Medical Consultant (Medicine Specialist) at ShardaCare",

      "Senior Medical Consultant (Medicine Specialist) at Amrit Multispeciality Clinic",

      "Medicine Specialist at 200-bed referral hospital of ITBP and CAPF",

      "Provided treatment during COVID-19 Wave 1 and 2",

      "Senior Medical Officer — United Nations Mission, Congo, Africa",

      "Resident Doctor — RBTB Hospital, New Delhi",
    ],
  },

  {
    type: "awards",

    title: "Awards & Achievements",

    points: [
      "Awarded United Nations Medal for medical service in DR Congo, Africa",

      "Recognized for service during the COVID-19 pandemic",

      "2 International Publications on Type 1 Diabetes & COVID-19",

      "Awarded commendations by DG ITBP, Director (SPG), ADG (Medical) CAPF & Director (Medical) ITBP",
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePause = () => {

  setIsPaused(true);

  setTimeout(() => {
    setIsPaused(false);
  }, 8000);

};

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

      {slides.map((slide, index) => (

        <div
  key={index}
  onClick={handlePause}
  className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer overflow-y-autos${
    currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
  }`}
>

          {/* Slide 1 */}

          {slide.type === "image" && (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 via-slate-50 to-blue-100 flex items-center justify-center">

  <img
    src={slide.image}
    alt="carousel"
    className="w-full h-full object-contain"
  />

</div>
          )}

          {/* Slide 2 */}

          {slide.type === "education" && (
            <div className="w-full h-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white flex items-center">

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                <img
                  src={slide.image}
                  alt="doctor"
                  className="rounded-3xl h-[280px] sm:h-[350px] lg:h-[420px] w-full max-w-md mx-auto object-cover shadow-2xl"
                />

                <div>

                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    {slide.title}
                  </h2>

                  <div className="mt-10 space-y-5">

                    {slide.points?.map((point) => (

                      <div
                        key={point}
                        className="bg-white/10 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-2xl shadow-lg hover:bg-white/15 transition"
                      >

                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-100">
                          {point}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* Slide 3 */}

          {slide.type === "experience" && (

            <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center">

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                <div>

                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-8">
                    {slide.title}
                  </h2>

                  <div className="space-y-4">

                    {slide.points?.map((point) => (

                      <div
                        key={point}
                        className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-lg hover:bg-white/15 hover:translate-x-2 transition-all duration-300"
                      >

                      <p className="text-lg leading-relaxed text-slate-100">
                        {point}
                      </p>

                      </div>
                    ))}

                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {slide.images?.map((img) => (

                    <img
                      key={img}
                      src={img}
                      alt="experience"
                      className="rounded-3xl h-[280px] sm:h-[380px] lg:h-[500px] w-full object-cover"
                    />

                  ))}

                </div>

              </div>

            </div>
          )}

          {/* Slide 4 */}

          {slide.type === "awards" && (

            <div className="w-full h-full bg-gradient-to-br from-blue-200 via-slate-100 to-blue-200 flex items-center">

              <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 w-full">

                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-center mb-16">
                  {slide.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                  {slide.points?.map((point) => (

                    <div
                      key={point}
                      className="group bg-white/80 backdrop-blur-md border border-blue-100 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >

                      <div className="w-16 h-1 rounded-full bg-blue-700 mb-6" />

                      <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>
          )}

        </div>
      ))}

      {/* Dots */}

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />

        ))}

      </div>

    </section>
  );
}