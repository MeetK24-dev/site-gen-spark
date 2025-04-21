
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Meet<span className="text-foreground">Kapoor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-foreground/80 hover:text-primary hover:bg-secondary"
            >
              <Link to={item.path}>{item.name}</Link>
            </Button>
          ))}
          <Button asChild className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 md:hidden">
            <nav className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="text-xl py-4 hover:bg-secondary"
                  onClick={toggleMobileMenu}
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              ))}
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
