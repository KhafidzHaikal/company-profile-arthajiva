export default function SignatureServices() {
  const services = [
    {
      title: "Multimedia Production",
      description: "Bringing stories to life through compelling visual narratives that resonate with your audience and amplify your brand message.",
      details: [
        "2D or 3D Motion Graphics that captivate",
        "Video Launching campaigns that convert",
        "Company Profile videos that inspire trust",
        "Explainer Videos that simplify complex ideas"
      ],
      icon: "🎬"
    },
    {
      title: "Application Development",
      description: "Crafting digital experiences that seamlessly blend functionality with innovation, turning your ideas into powerful applications.",
      details: [
        "Cross-platform Mobile Apps for iOS and Android",
        "Progressive Web Applications with modern UX",
        "Ongoing maintenance and feature enhancements",
        "Performance optimization and security updates"
      ],
      icon: "💻"
    },
    {
      title: "Event Management",
      description: "Creating memorable experiences that connect people and ideas, from intimate gatherings to large-scale productions.",
      details: [
        "Creative concept development and planning",
        "Hybrid events with seamless live streaming",
        "Corporate MICE events and conferences",
        "Professional event staffing solutions",
        "End-to-end production management"
      ],
      icon: "🎪"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#437B7E] via-[#5a9ca0] to-[#437B7E] bg-clip-text text-transparent">
              SIGNATURE SERVICES
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Breathing life into every digital solution with our comprehensive services 
            that transform your vision into impactful reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Details */}
                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#437B7E] to-[#5a9ca0] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}