export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-300 font-semibold uppercase tracking-wide">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Reach out for appointments, consultations,
            and medical assistance.
          </p>

        </div>

        {/* Contact Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ShardaCare */}

          <div className="bg-white rounded-[2rem] p-10 text-slate-900 shadow-2xl">

            <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm mb-6 font-medium">
              Clinic 1
            </div>

            <h3 className="text-3xl font-bold">
              ShardaCare Health City
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Address
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Gate No. 1,Building 10A,
                  Plot No. 32 & 34, Knowledge Park III,
                  Greater Noida, Uttar Pradesh 201310
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Phone
                </p>

                <p className="text-slate-600">
                  +91 836 828 9803<br/>
                  +91 995 348 8539
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Email
                </p>

                <p className="text-slate-600">
                  drnirajitservices@gmail.com
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Timings
                </p>

                <p className="text-slate-600">
                  Monday - Saturday | 9AM - 5PM
                </p>
              </div>

            </div>

          </div>

          {/* Amrit Clinic */}

          <div className="bg-white rounded-[2rem] p-10 text-slate-900 shadow-2xl">

            <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm mb-6 font-medium">
              Clinic 2
            </div>

            <h3 className="text-3xl font-bold">
              Amrit Multispeciality Clinic
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Address
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Amrit Complex, Pi-1, 
                  B-003, Birondi, Near Unitech Horizon,
                  Gate No. 1, Greater Noida,
                  Uttar Pradesh 201310
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Phone
                </p>

                <p className="text-slate-600">
                  +91 836 828 9803<br/>
                  +91 798 293 2584
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Email
                </p>

                <p className="text-slate-600">
                  drnirajitservices@gmail.com
                </p>
              </div>

              <div>
                <p className="text-blue-700 font-semibold mb-2">
                  Timings
                </p>

                <p className="text-slate-600">
                  Monday - Saturday | 6PM - 8PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}