
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This is a placeholder for actual form submission logic
    // In a real application, you'd send this data to a backend
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary font-mono">05.</span> Contact
          <div className="h-px bg-border flex-grow ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-foreground/80">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a href="mailto:meetkapoor998@gmail.com" className="text-foreground hover:text-primary">
                      meetkapoor998@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone</p>
                    <a href="tel:+919958657042" className="text-foreground hover:text-primary">
                      +91 9958657042
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-3">Location</h4>
                <p className="text-foreground/80">New Delhi, India 110034</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={4}
                    className="bg-secondary/50 border-border"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
