'use client';

import PillNav from '@/components/PillNav';
import DotGrid from '../components/DotGrid';
import { navItems } from '../constants';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import './styles.css';

export default function AboutPage() {
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
        baseColor="aliceblue"
        pillColor="#060010"
        hoveredPillTextColor="#060010"
        pillTextColor="white"
        ease="power2.easeOut"
        initialLoadAnimation
      />
      <ProfileCard
        name="Rahul Sakharkar"
        title="Assoc. Software Engineer"
        handle="RahulSakharkar"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo
        enableTilt={true}
        enableMobileTilt
        onContactClick={() => console.log('Contact clicked')}
        behindGlowColor="hsla(193, 100%, 70%, 0.60)"
        iconUrl="/assets/demo/iconpattern.png"
        behindGlowEnabled={true}
        innerGradient="linear-gradient(145deg,hsla(256, 40%, 45%, 0.55) 0%,hsla(307, 60%, 70%, 0.27) 100%)"
      />
    </div>
  );
}
