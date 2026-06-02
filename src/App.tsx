import Nav from '@/components/landing/Nav';
import Hero from '@/components/landing/Hero';
import TrustStrip from '@/components/landing/TrustStrip';
import Features from '@/components/landing/Features';
import WhyManzax from '@/components/landing/WhyManzax';
import Testimonial from '@/components/landing/Testimonial';
import Pricing from '@/components/landing/Pricing';
import Suite from '@/components/landing/Suite';
import CtaFinal from '@/components/landing/CtaFinal';
import Footer from '@/components/landing/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <WhyManzax />
        <Testimonial />
        <Pricing />
        <Suite />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
