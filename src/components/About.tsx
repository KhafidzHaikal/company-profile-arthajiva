/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">

      {/* <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute inset-0 
            bg-gradient-to-b
            from-transparent
            via-[#0a0f1d]/20
            via-[#0a0f1d]/40
            to-[#000000]/80
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%)"
          }}
        />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-black/30 blur-3xl opacity-40" />
          <div className="absolute top-10 left-0 w-[140%] h-52 bg-black/20 blur-3xl opacity-30" />
          <div className="absolute top-24 right-0 w-[130%] h-60 bg-black/25 blur-3xl opacity-35" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
            mixBlendMode: "overlay"
          }}
        />
      </div> */}

      {/* ======================================== */}
      {/* EXISTING FLOATING BLOBS (your original)   */}
      {/* ======================================== */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3C6E71]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div> */}

      {/* ======================================== */}
      {/* CONTENT WRAPPER                           */}
      {/* ======================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* ORGANIC GLASS CARD */}
          <div
            className="relative bg-white/85 backdrop-blur-xl shadow-2xl border-0 p-8 md:p-16 overflow-hidden"
            style={{
              borderRadius: "3rem 2rem 3.5rem 2.5rem",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.85) 100%)"
            }}
          >
            {/* Glow border */}
            <div
              // className="absolute -inset-1 bg-gradient-to-r from-[#3C6E71]/5 via-blue-400/3 to-[#3C6E71]/5 blur-xl opacity-30"
              className="absolute -inset-1 blur-xl opacity-30"
              style={{
                borderRadius: "3.2rem 2.2rem 3.7rem 2.7rem"
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-light text-[#3C6E71] mb-12 text-center tracking-tight">
                About
              </h2>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 text-center font-light">
                Since Artha is about{" "}
                <span className="font-semibold text-[#3C6E71]">
                  "purpose/wealth/goal"
                </span>{" "}
                and Jiva is about{" "}
                <span className="font-semibold text-[#3C6E71]">
                  "life,"
                </span>{" "}
                your brand could symbolize bringing meaningful life into both
                the digital and real-world spaces — making every project not
                just functional, but{" "}
                <span className="font-semibold text-[#3C6E71]">
                  alive, purposeful, and impactful.
                </span>
              </p>

              <div className="text-center">
                <button className="group relative px-10 py-5 bg-[#3C6E71] text-white font-medium rounded-full hover:bg-[#2d5356] transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105">
                  <span className="relative z-10">
                    Download Our Company Profile
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3C6E71] to-[#2d5356] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
