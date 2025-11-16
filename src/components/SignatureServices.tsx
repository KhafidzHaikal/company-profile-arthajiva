export default function SignatureServices() {
  const services = [
    {
      title: "MULTIMEDIA PRODUCTION",
      items: [
        "2D or 3D Motion Graphics",
        "Video Launching",
        "Video Profile Company",
        "Explainer Video"
      ],
      gradient: "from-[#3C6E71] to-[#2d5356]"
    },
    {
      title: "APPLICATION DEVELOPMENT",
      items: [
        "Mobile Application development for both iOS and Android",
        "Web Application Development",
        "Maintenance & Update: Regular maintenance and updating of applications"
      ],
      gradient: "from-[#2d5356] to-[#3C6E71]"
    },
    {
      title: "EVENT ORGANIZER",
      items: [
        "Concept & Creative Development",
        "Webinar or Live Streaming Event",
        "MICE",
        "Man Power",
        "Production Plan"
      ],
      gradient: "from-[#3C6E71] to-[#4a7c7f]"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#3C6E71]/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-300/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#3C6E71] mb-6 tracking-tight">
            SIGNATURE SERVICES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#3C6E71] to-transparent mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{
                transform: `translateY(${index % 2 === 1 ? '2rem' : '0'})`,
              }}
            >
              {/* Card */}
              <div 
                className="relative bg-white p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
                style={{
                  borderRadius: `${2 + index * 0.5}rem ${1.5 + index * 0.3}rem ${2.5 + index * 0.4}rem ${1.8 + index * 0.2}rem`
                }}
              >
                {/* Gradient accent */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}
                  style={{
                    borderRadius: `${2 + index * 0.5}rem ${1.5 + index * 0.3}rem 0 0`
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-8 leading-tight text-[#3C6E71]">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#3C6E71] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}