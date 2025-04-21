
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Event Organizer & Coordinator',
    company: 'Hackathon & Ideathon Organization',
    location: 'New Delhi, India',
    duration: '2024',
    description: [
      'Organized large-scale tech events including Code Kshetra Hackathon and Prasruti Ideathon 2024, overseeing logistics, sponsorships, and participant coordination for 400+ attendees.'
    ]
  },
  {
    id: 2,
    title: 'Organizer',
    company: 'Jims Code Kshetra Hackathon',
    location: 'Jagan Institute of Management Studies',
    duration: '2024',
    description: [
      'Led the organization of the Code Kshetra Hackathon at Jagan Institute of Management Studies.'
    ]
  },
  {
    id: 3,
    title: 'Member',
    company: 'Placement Cell',
    location: 'Jagan Institute of Management Studies',
    duration: '2022-2023',
    description: [
      'Served as a member of the Placement Cell at Jagan Institute of Management Studies.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">02.</span> Experience
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2 hidden md:block"></div>

          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Visible only on desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <Briefcase size={20} />
                  </div>
                </div>

                <Card className={`md:max-w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                } card-hover bg-card border-border`}>
                  <CardContent className="p-6">
                    <div className="flex md:hidden items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                        <Briefcase size={18} />
                      </div>
                      <span className="text-primary font-mono">{exp.duration}</span>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="hidden md:block text-primary font-mono">{exp.duration}</span>
                    </div>
                    
                    <p className="text-foreground/70 font-medium mb-2">{exp.company}</p>
                    <p className="text-foreground/60 text-sm mb-4">{exp.location}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-foreground/80 flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
