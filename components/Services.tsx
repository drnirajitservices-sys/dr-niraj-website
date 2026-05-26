const services = [
  {
    title: "Experienced Doctor",
    description:
      "16+ years of expertise in General Medicine and patient care.",
    image: "/services/experienced-doctor.jpg",
  },

  {
    title: "General Health Care",
    description:
      "Comprehensive healthcare solutions for all age groups.",
    image: "/services/general-health.jpg",
  },

  {
    title: "Modern Diagnostic Facilities",
    description:
      "Advanced diagnostic support for accurate treatment planning.",
    image: "/services/diagnostic.jpg",
  },

  {
    title: "Diabetic Care",
    description:
      "Personalized diabetes management and long-term monitoring.",
    image: "/services/diabetic-care.jpg",
  },

  {
    title: "Patient Centric Approach",
    description:
      "Focused on compassionate and patient-first healthcare.",
    image: "/services/patient-care.jpg",
  },

  {
    title: "Respiratory & Chest Care",
    description:
      "Specialized treatment for respiratory and pulmonary conditions.",
    image: "/services/respiratory-care.jpg",
  },

  {
    title: "BP & Heart Diseases",
    description:
      "Expert heart care & BP management.",
    image: "/services/heart-care.jpg",
  },

  {
    title: "Joint Care",
    description:
      "Treatment for joint pain, inflammation, and mobility issues.",
    image: "/services/joint-care.jpg",
  },

  {
    title: "Infectious Diseases Treatment",
    description:
      "Diagnosis and treatment for infectious and viral diseases.",
    image: "/services/infectious-disease.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Healthcare Services & Expertise
          </h2>

          <p className="mt-2 text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive medical consultation and patient-focused
            healthcare solutions with modern medical expertise.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden h-56">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}

                <div className="mt-6 h-1 w-0 bg-blue-700 group-hover:w-full transition-all duration-500 rounded-full" />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}