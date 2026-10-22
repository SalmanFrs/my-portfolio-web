import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-16 bg-background flex-1 max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col w-full">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <About />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
