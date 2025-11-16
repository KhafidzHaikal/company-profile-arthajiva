'use client';

export default function TrustedBy() {
  const companies = [
    { name: 'OJK', logo: 'OJK' },
    { name: 'KOMDIGI', logo: 'KOMDIGI' },
    { name: 'BSI', logo: 'BSI' },
    { name: 'BTN', logo: 'BTN' },
    { name: 'PERTAMINA', logo: 'PERTAMINA' },
    { name: 'ELNUSA', logo: 'ELNUSA' },
    { name: 'TELKOM', logo: 'TELKOM' },
    { name: 'DHL', logo: 'DHL' },
    { name: 'NAM AIR', logo: 'NAM AIR' },
    { name: 'CAREFAST', logo: 'CAREFAST' },
    { name: 'YOURPAY', logo: 'YOURPAY' },
    { name: 'KOPILUVIUM', logo: 'KOPILUVIUM' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#3C6E71] to-[#2d5356] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/70 mb-12 text-lg font-light">
          Trusted by Industry
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {Array(3).fill(companies).flat().map((company, index) => (
              <div key={index} className="flex flex-col items-center mx-12 flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">
                    {company.logo.slice(0, 3)}
                  </span>
                </div>
                <span className="text-xs text-white/60 whitespace-nowrap">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-144px * 12)); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }
      `}</style>
    </section>
  );
}