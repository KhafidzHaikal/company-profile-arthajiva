'use client';

import Image from 'next/image';

export default function TrustedBy() {
  const companies = [
    { name: 'OJK', logo: '/images/logos/OJK_Logo.png' },
    { name: 'KOMDIGI', logo: '/images/logos/komdigi.png' },
    { name: 'BSI', logo: '/images/logos/bsi.png' },
    { name: 'BTN', logo: '/images/logos/btn.png' },
    { name: 'PERTAMINA', logo: '/images/logos/pertamina.png' },
    { name: 'ELNUSA', logo: '/images/logos/Logo_Elnusa.svg.png' },
    { name: 'TELKOM', logo: '/images/logos/telkom.png' },
    { name: 'DHL', logo: '/images/logos/dhl.png' },
    { name: 'NAM AIR', logo: '/images/logos/nahair.png' },
    { name: 'CAREFAST', logo: '/images/logos/carefast.png' },
    { name: 'YOURPAY', logo: '/images/logos/yourpay.png' },
    { name: 'KOPILUVIUM', logo: '/images/logos/kopiluvium.png' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 mb-12 text-sm font-medium uppercase tracking-wider">
          Trusted by Industry
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {Array(3).fill(companies).flat().map((company, index) => (
              <div key={index} className="flex items-center justify-center mx-16 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={150}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-192px * 12)); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }
      `}</style>
    </section>
  );
}