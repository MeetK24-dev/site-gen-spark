
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skills = [
  { category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'JWT Auth'] },
  { category: 'Database', items: ['MongoDB', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'CI/CD', 'RESTful APIs'] },
  { category: 'Languages', items: ['JavaScript', 'Java'] },
  { category: 'Soft Skills', items: ['Problem-Solving', 'Communication', 'Deadline Management'] }
];

const SkillBar = ({ name, level = 90 }: { name: string; level?: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <p className="text-foreground">{name}</p>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">04.</span> Skills
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <Card 
              key={skillGroup.category} 
              className="bg-card border-border animate-fade-in"
              style={{ animationDelay: `${groupIndex * 0.15}s` }}
            >
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <div key={skill} className="group">
                      <SkillBar 
                        name={skill} 
                        level={90 - (index * 5)} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              'Node.js', 'React.js', 'MongoDB', 'Express.js', 'Java', 
              'Firebase', 'CI/CD', 'RESTful APIs', 'Git', 
              'Problem-Solving', 'Communication', 'Deadline Management'
            ].map((skill, index) => (
              <div
                key={skill}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium animate-fade-in",
                  "bg-secondary text-foreground border border-border hover:border-primary transition-colors",
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
