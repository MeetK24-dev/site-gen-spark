
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Use a visually engaging placeholder image (from provided set)
import profileImage from '/photo-1485827404703-89b55fcc595e.jpg';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">01.</span> About Me
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4">
            <p className="text-foreground/80">
              I'm a passionate Full-Stack Developer based in New Delhi, India, with expertise in creating 
              secure and scalable web applications. My journey in tech has been driven by a deep curiosity 
              for solving complex problems and building user-friendly digital experiences.
            </p>
            <p className="text-foreground/80">
              In addition to my development work, I've organized large-scale tech events including 
              Code Kshetra Hackathon and Prasruti Ideathon 2024, overseeing logistics, sponsorships,
              and participant coordination for over 400 attendees.
            </p>
            <p className="text-foreground/80">
              My technical expertise spans both frontend and backend development, with a focus on 
              Node.js, React, MongoDB, and related technologies. I'm passionate about creating efficient,
              well-organized systems that solve real-world problems.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <Card className="bg-card border-border mb-4">
                <CardContent className="p-5">
                  <h4 className="font-medium text-lg">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-foreground/70">Jagan Institute of Management Studies</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-foreground/60">New Delhi, India</span>
                    <span className="text-primary">2022</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border mb-4">
                <CardContent className="p-5">
                  <h4 className="font-medium text-lg">Class XII</h4>
                  <p className="text-foreground/70">KIIT World School • 90.75%</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-foreground/60">New Delhi, India</span>
                    <span className="text-primary">2022</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <h4 className="font-medium text-lg">Class X</h4>
                  <p className="text-foreground/70">KIIT World School • 79.00%</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-foreground/60">New Delhi, India</span>
                    <span className="text-primary">2020</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative max-w-sm rounded-lg overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Meet Kapoor" 
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-200 animate-fade-in"
                />
                <div className="absolute inset-0 bg-background/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
