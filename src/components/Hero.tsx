
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-primary mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Meet Kapoor
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground/70 mb-6">
            Full-Stack Developer & Event Organizer
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-xl">
            I specialize in building secure, scalable web applications and organizing large-scale tech events.
            Currently focused on creating innovative solutions with React, Node.js, and MongoDB.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <a href="#about" className="flex flex-col items-center text-foreground/50 hover:text-primary">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
