
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Use a visually engaging placeholder image from Unsplash (copied to assets)
import profileImage from '../assets/photo-1488590528505-98d2b5aba04b.jpg';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">01.</span> About Me
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6 text-foreground/90 text-lg leading-relaxed">
            <p>
              I'm a passionate Full-Stack Developer based in New Delhi, India, with expertise in creating 
              secure and scalable web applications. My journey in tech has been driven by a deep curiosity 
              for solving complex problems and building user-friendly digital experiences.
            </p>
            <p>
              In addition to my development work, I've organized large-scale tech events including 
              Code Kshetra Hackathon and Prasruti Ideathon 2024, overseeing logistics, sponsorships,
              and participant coordination for over 400 attendees.
            </p>
            <p>
              My technical expertise spans both frontend and backend development, with a focus on 
              Node.js, React, MongoDB, and related technologies. I'm passionate about creating efficient,
              well-organized systems that solve real-world problems.
            </p>
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-5">Education</h3>
              <Card className="bg-card border-border mb-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-1">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-foreground/70">Jagan Institute of Management Studies</p>
                  <div className="flex justify-between mt-3 text-sm text-foreground/60">
                    <span>New Delhi, India</span>
                    <span className="text-primary font-mono">2022</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border mb-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-1">Class XII</h4>
                  <p className="text-foreground/70">KIIT World School • 90.75%</p>
                  <div className="flex justify-between mt-3 text-sm text-foreground/60">
                    <span>New Delhi, India</span>
                    <span className="text-primary font-mono">2022</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-1">Class X</h4>
                  <p className="text-foreground/70">KIIT World School • 79.00%</p>
                  <div className="flex justify-between mt-3 text-sm text-foreground/60">
                    <span>New Delhi, India</span>
                    <span className="text-primary font-mono">2020</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center items-center">
            <div className="relative group max-w-sm rounded-lg shadow-xl border border-primary border-opacity-30 overflow-hidden transition-transform hover:scale-105 duration-300">
              <img 
                src={profileImage} 
                alt="Meet Kapoor" 
                className="w-full h-auto rounded-lg object-cover select-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
