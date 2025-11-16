import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import TrustedBy from '@/components/TrustedBy';
import LatestWorks from '@/components/LatestWorks';
import SignatureServices from '@/components/SignatureServices';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Ultra Smooth Fade */}
      {/* <div className="h-96 bg-gradient-to-b from-slate-900 via-slate-800/80 via-slate-700/60 via-slate-600/40 via-slate-500/25 via-slate-400/15 via-slate-300/8 via-slate-200/4 via-slate-100/2 to-transparent" /> */}
      <About />
      <TrustedBy />
      <LatestWorks />
      <SignatureServices />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
