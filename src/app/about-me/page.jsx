'use client';

import { useRef } from 'react';
import PillNav from '@/components/PillNav';
import DotGrid from '../components/DotGrid';
import { navItems } from '../constants';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import SpotlightCard from '../components/SpotlightCard';
import './styles.css';

export default function AboutPage() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-page">
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

      {/* Section 1: Profile Card */}
      <section className="about-section profile-section">
        <ProfileCard
          name="Rahul Sakharkar"
          title="Assoc. Software Engineer"
          handle="RahulSakharkar"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/AlgoCanvas/Assets/me.jpg"
          showUserInfo
          enableTilt={false}
          onContactClick={scrollToContact}
          behindGlowColor="hsla(193, 100%, 70%, 0.60)"
          iconUrl="/AlgoCanvas/Assets/me.jpg"
          behindGlowEnabled={true}
          innerGradient="linear-gradient(145deg,hsla(256, 40%, 45%, 0.55) 0%,hsla(307, 60%, 70%, 0.27) 100%)"
        />
      </section>

      {/* Section 2: About Me */}
      <section className="about-section text-section">
        <div className="about-text">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="#56055d"
          >
            <h2>About Me</h2>
            <p>
              Hi, I&apos;m Rahul Sakharkar &mdash; an Associate Software
              Engineer with a passion for building interactive, visually
              engaging web experiences. AlgoCanvas is my playground for
              exploring algorithms through animation and intuitive design. I
              love turning complex concepts into something you can see, feel,
              and understand.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Section 3: Contact */}
      <section className="about-section contact-section" ref={contactRef}>
        <div className="contact-card">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="#56055d"
          >
            <h2>Get in Touch</h2>
            <div className="contact-links">
              <a
                href="mailto:rahulsakharkar2002@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">&#9993;</span>
                rahulsakharkar2002@gmail.com
              </a>
              <a
                href="https://github.com/RahulSakharkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">&#128187;</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/RahulSakharkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">&#128101;</span>
                LinkedIn
              </a>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
