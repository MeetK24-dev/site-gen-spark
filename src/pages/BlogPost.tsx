
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// In a real application, this would fetch data from Sanity
const mockPosts = {
  'building-secure-web-applications': {
    title: 'Building Secure Web Applications with Node.js and Express',
    date: 'April 15, 2023',
    readTime: '8 min read',
    categories: ['Node.js', 'Security', 'Backend'],
    content: `
      <p>Security is a critical aspect of web application development, especially when dealing with user data and authentication. In this article, we'll explore the best practices for creating secure web applications using Node.js and Express.</p>
      
      <h2>Authentication and Authorization</h2>
      <p>One of the most important aspects of web application security is proper authentication and authorization. Here are some key considerations:</p>
      <ul>
        <li>Use JWT tokens for stateless authentication</li>
        <li>Implement proper password hashing using bcrypt</li>
        <li>Set up role-based access control</li>
        <li>Use HTTPS to encrypt data in transit</li>
      </ul>
      
      <h2>Input Validation</h2>
      <p>Never trust user input. Always validate and sanitize data on both the client and server side. Consider using libraries like Joi or express-validator to help with validation.</p>
      
      <h2>Security Headers</h2>
      <p>Implement security headers using the Helmet middleware to protect against common vulnerabilities like XSS attacks, clickjacking, and MIME type sniffing.</p>
      
      <pre><code>const helmet = require('helmet');
app.use(helmet());</code></pre>
      
      <h2>Rate Limiting</h2>
      <p>Implement rate limiting to prevent brute force attacks and denial-of-service attacks.</p>
      
      <h2>Conclusion</h2>
      <p>Security should be a priority from the beginning of your development process, not an afterthought. By following these best practices, you can build more secure web applications with Node.js and Express.</p>
    `
  },
  'react-hooks-guide': {
    title: 'React Hooks: A Comprehensive Guide',
    date: 'March 22, 2023',
    readTime: '10 min read',
    categories: ['React', 'Frontend', 'JavaScript'],
    content: `
      <p>React Hooks have revolutionized how we write React components. This guide will cover the most important hooks and how to use them effectively.</p>
      
      <h2>useState</h2>
      <p>The useState hook allows you to add state to functional components...</p>
      
      <h2>useEffect</h2>
      <p>The useEffect hook allows you to perform side effects in functional components...</p>
      
      <h2>Custom Hooks</h2>
      <p>One of the most powerful features of hooks is the ability to create custom hooks...</p>
    `
  },
  'mongodb-schema-design': {
    title: 'MongoDB Schema Design: Best Practices',
    date: 'February 10, 2023',
    readTime: '12 min read',
    categories: ['MongoDB', 'Database', 'Backend'],
    content: `
      <p>Designing efficient MongoDB schemas is crucial for application performance. In this article, we'll explore best practices for MongoDB schema design.</p>
      
      <h2>Embedding vs. Referencing</h2>
      <p>One of the key decisions in MongoDB schema design is whether to embed documents or use references...</p>
      
      <h2>Indexing Strategies</h2>
      <p>Proper indexing is critical for query performance in MongoDB...</p>
    `
  },
  'organizing-tech-events': {
    title: 'Organizing Large-Scale Tech Events: A Behind-the-Scenes Look',
    date: 'January 5, 2023',
    readTime: '15 min read',
    categories: ['Events', 'Management', 'Tech Community'],
    content: `
      <p>Based on my experience organizing Code Kshetra Hackathon and Prasruti Ideathon 2024, here's a detailed breakdown of what it takes to organize a successful tech event.</p>
      
      <h2>Planning and Preparation</h2>
      <p>The foundation of any successful event is thorough planning. Start at least 3-4 months in advance for large-scale events...</p>
      
      <h2>Securing Sponsorships</h2>
      <p>Sponsorships are vital for funding your event. Here's how to approach potential sponsors and what to offer them...</p>
      
      <h2>Logistics Management</h2>
      <p>From venue selection to participant registration, managing logistics is a complex task that requires attention to detail...</p>
      
      <h2>Participant Coordination</h2>
      <p>With over 400 attendees at our events, effective communication and coordination were essential...</p>
    `
  }
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && mockPosts[slug as keyof typeof mockPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="pl-0">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map(category => (
                <Badge key={category} variant="secondary" className="text-primary bg-secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 sm:p-8">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
