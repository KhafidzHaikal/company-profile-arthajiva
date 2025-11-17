export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/JAKARTA 1.svg')`
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-700/60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-[#437B7E] to-[#5a9ca0] rounded-full animate-pulse opacity-60 blur-sm" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-gray-400 to-[#437B7E] rounded-full animate-ping opacity-40 blur-sm" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-[#437B7E] to-[#5a9ca0] rounded-full animate-pulse opacity-50 blur-sm" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-gradient-to-r from-gray-300 to-[#437B7E] rounded-full animate-ping opacity-30 blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          ARTHAJIVA
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light mb-8 leading-relaxed max-w-4xl mx-auto">
          Breathing life and purpose into Every Digital
        </p>
        
        {/* CTA Button */}
        <div className="mt-10">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#437B7E] to-[#5a9ca0] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#437B7E]/25 transform hover:scale-105 transition-all duration-500">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5a9ca0] to-[#437B7E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}