export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Dr. Niraj Kumar
          </h2>

          <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            General Physician
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Video Section */}

          <div className="relative w-full lg:max-w-[450px] xl:max-w-[500px] mx-auto">

            <div className="absolute inset-0 bg-blue-300/20 blur-3xl rounded-full" />

            <div className="sticky top-28 relative w-full max-w-[500px] xl:max-w-[550px] mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
              <video
                src="/dr_neerajintro.mp4"
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-cover max-h-[750px]"
              />

            </div>

          </div>

          {/* Content Section */}

          <div>

            <div className="inline-block bg-blue-100 text-blue-700 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium">
              16+ Years of Medical Excellence
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mt-6 leading-tight tracking-tight">
              Senior Consultant, General Medicine
            </h3>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-700 font-semibold leading-relaxed">
              Sharda Care Healthcity & Amrit Multispeciality Clinic
            </p>

            <p className="mt-8 text-slate-600 leading-relaxed text-base md:text-lg">
              Dr. Niraj is an experienced physician with over 16 years
              of expertise in General Medicine. He earned his MD from
              Command Hospital, Indian Armed Forces, Western Command,
              Chandimandir (Pt. B.D. Sharma Medical University, Rohtak),
              and his MBBS from JIPMER, Pondicherry.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed md:text-lg">
              His areas of specialisation include Diabetes,
              Gastroenterology, Pulmonology, Nephrology,
              Cardiology, and Neurology.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed md:text-lg">
              He has managed 200-bedded speciality hospitals,
              served with the United Nations in Africa,
              and published research on Type 1 Diabetes
              and COVID-19.
            </p>

            {/* Experience Cards */}

            <div className="mt-10 space-y-5">

              <div className="bg-blue-50 rounded-2xl p-4 md:p-5 shadow-md border border-slate-100">
                <p className="font-semibold text-slate-900">
                  1. Chief Medical Officer / Commandant (Medical)
                </p>

                <p className="text-slate-600 mt-2">
                  Central Armed Police Force Hospital,
                  Government of India
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 md:p-5 shadow-md border border-slate-100">
                <p className="font-semibold text-slate-900">
                  2. Senior Medical Officer
                </p>

                <p className="text-slate-600 mt-2">
                  United Nations Mission,
                  Democratic Republic of Congo
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 md:p-5 shadow-md border border-slate-100">
                <p className="font-semibold text-slate-900">
                  3. Junior Resident Doctor
                </p>

                <p className="text-slate-600 mt-2">
                  RBTB Hospital (RBIPMT),
                  Kingsway Camp, New Delhi
                </p>
              </div>

            </div>


          </div>

        </div>

        {/* Certifications / Publications / Memberships */}

        <div className="mt-24">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">

            {/* Certifications */}

            <div className="bg-gradient-to-br from-blue-900  to-slate-900 rounded-[2.5rem] p-6 md:p-8 shadow-2xl overflow-hidden relative">

              {/* Background Glow */}

              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

              {/* Heading */}

              <div className="relative z-10">

                <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-10 tracking-tight">
                  Certifications
                </h4>

                {/* Certification Cards */}

                <div className="space-y-6">

                  {/* Card 1 */}

                  <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        ✓
                      </div>

                      <div>

                        <h5 className="text-xl font-bold text-white">
                          Certified MD in General Medicine
                        </h5>

                        <p className="text-blue-100 mt-2 leading-relaxed">
                          Advanced medical specialization in General Medicine
                          with extensive clinical expertise.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Card 2 */}

                  <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        ✓
                      </div>

                      <div>

                        <h5 className="text-xl font-bold text-white">
                          Advanced Medical Procedures
                        </h5>

                        <p className="text-blue-100 mt-2 leading-relaxed">
                          Expertise in paracentesis, ICD insertion,
                          bone marrow aspiration and biopsy procedures.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Card 3 */}

                  <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        ✓
                      </div>

                      <div>

                        <h5 className="text-xl font-bold text-white">
                          Critical Care & Hospital Administration
                        </h5>

                        <p className="text-blue-100 mt-2 leading-relaxed">
                          Experienced in hospital management, emergency care,
                          and critical care administration.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Publications */}

            <div className="bg-gradient-to-br from-blue-900  to-slate-900 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">

              {/* Background Glow */}

              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">

                {/* Heading */}

                <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-10 tracking-tight">
                  Publications
                </h4>

                {/* Publication Cards */}

                <div className="space-y-6">

                  {/* Publication 1 */}

                  <a
                    href="https://ijhcr.com/index.php/ijhcr/article/view/1212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1"
                  >

                    <div className="flex flex-col sm:flex-row items-start justify-between gap-5">

                      <div>

                        <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                          COVID-19 Research
                        </div>

                        <h5 className="text-2xl font-bold text-white leading-snug">
                          COVID-19 Patient Management Research Publication
                        </h5>

                        <p className="text-blue-100 mt-4 leading-relaxed">
                          International Journal of Health & Clinical Research
                        </p>

                      </div>

                      {/* Open Button */}

                      <div className="shrink-0">

                        <div className="bg-blue-600 group-hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                          Open →
                        </div>

                      </div>

                    </div>

                  </a>

                  {/* Publication 2 */}

                  <a
                    href="https://www.academia.edu/download/64117206/1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1"
                  >

                    <div className="flex flex-col sm:flex-row items-start justify-between gap-5">

                      <div>

                        <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                          Diabetes Research
                        </div>

                        <h5 className="text-2xl font-bold text-white leading-snug">
                          Type 1 Diabetes Research Publication
                        </h5>

                        <p className="text-blue-100 mt-4 leading-relaxed">
                          International Medical Research Publication
                        </p>

                      </div>

                      {/* Open Button */}

                      <div className="shrink-0">

                        <div className="bg-blue-600 group-hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                          Open →
                        </div>

                      </div>

                    </div>

                  </a>

                </div>

              </div>

            </div>

            {/* Memberships */}

            <div className="bg-gradient-to-br from-blue-900  to-slate-900 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">

              {/* Background Glow */}

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">

                {/* Heading */}


                <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-10 tracking-tight">
                  Memberships
                </h4>

                {/* Membership Cards */}

                <div className="space-y-6">

                  {/* IMA */}

                  <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-start gap-5">

                      {/* Icon */}

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        ✚
                      </div>

                      {/* Content */}

                      <div>

                        <h5 className="text-2xl font-bold text-white leading-snug">
                          Indian Medical Association
                        </h5>

                        <p className="text-blue-100 mt-3 leading-relaxed">
                          Active member of the Indian Medical Association (IMA),
                          contributing to professional medical excellence and healthcare advancement.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* API */}

                  <div className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-start gap-5">

                      {/* Icon */}

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        ✚
                      </div>

                      {/* Content */}

                      <div>

                        <h5 className="text-2xl font-bold text-white leading-snug">
                          Association of Physicians of India
                        </h5>

                        <p className="text-blue-100 mt-3 leading-relaxed">
                          Member of the Association of Physicians of India (API),
                          dedicated to advancing clinical medicine and physician collaboration.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Patient Feedback */}

<div className="mt-24">

  {/* Heading */}

  <div className="text-center mb-16">

    <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
       Patient's Feedback
    </h3>

  </div>

  {/* Feedback Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

    {/* Feedback 1 */}

    <div className="group bg-blue-50 rounded-[2rem] h-full p-5 md:p-7 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

      <p className="mt-8 text-slate-600 leading-relaxed text-lg">
        My father was admitted to ShardaCare Hospital after a heart attack.
        Dr. Niraj Sir treated him very well and my father is recovering
        extremely well now.
      </p>

      <div className="mt-2">

        <h4 className="text-2xl font-bold text-slate-900">
          Vinita Yadav
        </h4>

        <p className="text-blue-700 font-medium mt-1">
          Patient Attendant
        </p>

      </div>

    </div>

    {/* Feedback 2 */}

    <div className="group bg-blue-50 rounded-[2rem] h-full p-5 md:p-7 shadow-2xl hover:shadow-blue-300/50 hover:-translate-y-2 transition-all duration-500 text-white relative overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300/20 blur-3xl rounded-full" />

      <div className="relative z-10">

        <p className="mt-8 text-slate-600 leading-relaxed text-lg">
          I was treated by Dr. Niraj for severe liver-related issues.
          His treatment and guidance helped me recover successfully.
        </p>

        <div className="mt-2">

          <h4 className="text-2xl font-bold text-slate-900">
            Laxman Singh
          </h4>

          <p className="text-blue-700 font-medium mt-1">
            Patient
          </p>

        </div>

      </div>

    </div>

    {/* Feedback 3 */}

    <div className="group bg-blue-50 rounded-[2rem] h-full p-5 md:p-7 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

      <p className="mt-8 text-slate-600 leading-relaxed text-lg">
        My brother was treated by Dr. Niraj Sir for kidney stones.
        He has now recovered completely and is feeling much better.
      </p>

      <div className="mt-2">

        <h4 className="text-2xl font-bold text-slate-900">
          Rohit Sharma
        </h4>

        <p className="text-blue-700 font-medium mt-1">
          Patient Relative
        </p>

      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}