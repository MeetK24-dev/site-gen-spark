
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogPost } from '@/components/BlogPost';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Mock blog posts - in a real app, these would come from Sanity
const mockPosts = [
  {
    id: '1',
    title: 'Building Secure Web Applications with Node.js and Express',
    excerpt: 'Learn the best practices for creating secure web applications using Node.js and Express, including authentication, authorization, and data validation.',
    date: 'April 15, 2023',
    readTime: '8 min read',
    slug: 'building-secure-web-applications',
    categories: ['Node.js', 'Security', 'Backend']
  },
  {
    id: '2',
    title: 'React Hooks: A Comprehensive Guide',
    excerpt: 'Discover how to use React Hooks effectively in your projects, with practical examples and performance optimization tips.',
    date: 'March 22, 2023',
    readTime: '10 min read',
    slug: 'react-hooks-guide',
    categories: ['React', 'Frontend', 'JavaScript']
  },
  {
    id: '3',
    title: 'MongoDB Schema Design: Best Practices',
    excerpt: 'Learn how to design efficient MongoDB schemas for your applications, including indexing strategies and data modeling approaches.',
    date: 'February 10, 2023',
    readTime: '12 min read',
    slug: 'mongodb-schema-design',
    categories: ['MongoDB', 'Database', 'Backend']
  },
  {
    id: '4',
    title: 'Organizing Large-Scale Tech Events: A Behind-the-Scenes Look',
    excerpt: 'A detailed breakdown of how to organize successful tech events, from planning and logistics to sponsorships and participant management.',
    date: 'January 5, 2023',
    readTime: '15 min read',
    slug: 'organizing-tech-events',
    categories: ['Events', 'Management', 'Tech Community']
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
              Thoughts, tutorials, and insights about web development, event organizing, and technology
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                placeholder="Search articles..."
                className="bg-secondary/50 border-border"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <BlogPost post={mockPosts[0]} featured />
          </div>
        </section>
        
        {/* Recent Posts */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mockPosts.slice(1).map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-foreground/70 mb-6">
              Subscribe to my newsletter to receive notifications about new blog posts and tech updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                type="email"
                className="bg-secondary/50 border-border"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
