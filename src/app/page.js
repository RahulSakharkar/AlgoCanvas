'use client';
import PillNav from '@/components/PillNav';
import { AlgorithmCards } from './components/algorithm-cards';
import Footer from './components/footer';
import Hero from './components/hero';
import DotGrid from './components/DotGrid';
import { navItems } from './constants';

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 -z-50">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <PillNav
        items={navItems}
        baseColor="#e7e2f5"
        pillColor="#060010"
        hoveredPillTextColor="#060010"
        pillTextColor="white"
        ease="power2.easeOut"
        initialLoadAnimation
      />
      <Hero />
      <main className="container mx-auto py-12 px-4">
        <div className="cards-container">
          <AlgorithmCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}
