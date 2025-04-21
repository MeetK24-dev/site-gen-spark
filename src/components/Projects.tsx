
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Staycationer',
    description: 'Built and enhanced admin panel features including Reels display, Coupon Management, and a streamlined Booking System.',
    tags: ['Full-Stack', 'React', 'Node.js', 'MongoDB'],
    links: {
      github: '#',
      live: '#'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Synergy (Hospital Management System)',
    description: 'Designed and developed a secure, scalable backend and user-friendly frontend for core hospital operations including patient management, appointments, billing, and reports.',
    tags: ['Full-Stack', 'React', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: '#',
      live: '#'
    },
    featured: true
  },
  {
    id: 3,
    title: 'Classic Industries Admin Portal',
    description: 'Built an inventory management system using Node.js, React, and MongoDB with real-time updates and CI/CD, enhancing efficiency and reducing manual errors.',
    tags: ['Full-Stack', 'Node.js', 'React', 'MongoDB', 'CI/CD'],
    links: {
      github: '#'
    }
  },
  {
    id: 4,
    title: '360 Solutions Admin Portal',
    description: 'Tech Stack: Node.js, React, MongoDB, Express, JWT Auth, Socket.io, CI/CD Pipelines.',
    tags: ['Full-Stack', 'Node.js', 'React', 'MongoDB', 'JWT', 'Socket.io'],
    links: {
      github: '#'
    }
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">03.</span> Projects
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`bg-card border-border transition-all duration-300 hover:border-primary/50 card-hover animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub Repository</span>
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <Link className="h-5 w-5" />
                          <span className="sr-only">Live Project</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-primary bg-secondary hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
