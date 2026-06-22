import Nav from '@/components/landing/Nav';
import Hero from '@/components/landing/Hero';
import TrustStrip from '@/components/landing/TrustStrip';
import Problem from '@/components/landing/Problem';
import Pillars from '@/components/landing/Pillars';
import Features from '@/components/landing/Features';
import Migration from '@/components/landing/Migration';
import Pricing from '@/components/landing/Pricing';
import Faq from '@/components/landing/Faq';
import Signup from '@/components/landing/Signup';
import Footer from '@/components/landing/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Problem />
        <Pillars />
        <Features />
        <Migration />
        <Pricing />
        <Faq />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
