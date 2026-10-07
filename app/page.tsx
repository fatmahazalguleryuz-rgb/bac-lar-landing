import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gate from '@/components/Gate';
import Features from '@/components/Features';
import CategoryWall from '@/components/CategoryWall';
import Anonymity from '@/components/Anonymity';
import Manifesto from '@/components/Manifesto';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gate />
      <Features />
      <CategoryWall />
      <Anonymity />
      <Manifesto />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
