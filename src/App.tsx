import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Innovation } from './components/Innovation';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Team } from './components/Team';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

import { Project, InnovationDomain, TeamMember, GalleryItem } from './types';
import { INNOVATION_DOMAINS } from './data/companyData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<InnovationDomain | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'careers' | null>(null);
  const [showBeamsDemo, setShowBeamsDemo] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithSubject = (subject: string) => {
    scrollToSection('contact');
    setTimeout(() => {
      const subjectSelect = document.getElementById('contact-subject') as HTMLSelectElement | null;
      if (subjectSelect) {
        // Find matching option or set value
        const options = Array.from(subjectSelect.options);
        const match = options.find((opt) => opt.value.toLowerCase().includes(subject.toLowerCase().substring(0, 5)));
        if (match) {
          subjectSelect.value = match.value;
        }
      }
      const messageTextarea = document.getElementById('contact-message') as HTMLTextAreaElement | null;
      if (messageTextarea && !messageTextarea.value) {
        messageTextarea.value = `Regarding: ${subject}\n\nWe would like to discuss technical collaboration and architecture specifications with your team.`;
        messageTextarea.focus();
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 flex flex-col font-sans">
      {/* 1. STICKY NAVBAR */}
      <Navbar onOpenContact={() => scrollToSection('contact')} />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onLearnMore={() => scrollToSection('about')}
          onOpenBeamsDemo={() => setShowBeamsDemo(true)}
        />

        {/* 3. ABOUT SECTION */}
        <About
          onLearnMoreModal={() => setSelectedDomain(INNOVATION_DOMAINS[0])}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* 4. INNOVATION SECTION */}
        <Innovation onSelectDomain={(domain) => setSelectedDomain(domain)} />

        {/* 5. PROJECTS SECTION */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. ACHIEVEMENTS & MILESTONES SECTION */}
        <Achievements />

        {/* 7. TEAM SECTION */}
        <Team
          onSelectMember={(member) => setSelectedMember(member)}
          onViewCareers={() => setLegalModalType('careers')}
        />

        {/* 8. WHY CHOOSE US SECTION */}
        <WhyChooseUs />

        {/* 9. GALLERY / INSIDE OUR JOURNEY */}
        <Gallery onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* 10. TESTIMONIALS & PARTNERS */}
        <Testimonials />

        {/* 11. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 12. FOOTER */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenCareers={() => setLegalModalType('careers')}
      />

      {/* MODALS */}
      <Modals
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        selectedDomain={selectedDomain}
        onCloseDomain={() => setSelectedDomain(null)}
        selectedMember={selectedMember}
        onCloseMember={() => setSelectedMember(null)}
        selectedGalleryItem={selectedGalleryItem}
        onCloseGallery={() => setSelectedGalleryItem(null)}
        legalModalType={legalModalType}
        onCloseLegal={() => setLegalModalType(null)}
        showBeamsDemo={showBeamsDemo}
        onCloseBeamsDemo={() => setShowBeamsDemo(false)}
        onOpenContactWithSubject={handleOpenContactWithSubject}
      />
    </div>
  );
}
